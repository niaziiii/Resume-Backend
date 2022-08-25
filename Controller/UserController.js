const UserSchema = require('./../Model/users');
const jwt = require('jsonwebtoken');
const AppError = require('../Utilties/appError');
const catchAsync = require('./../Utilties/catchAsyncError');
const { promisify } = require('util')


const TokenGenerate = id => {
    return jwt.sign({ id: id }, process.env.JWTSECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN
    });
};
const createSendTokenCookie = (user, statusCode, res) => {
    const token = TokenGenerate(user._id);
    const cookieOptions = {
        expire: new Date(Date.now() + process.env.JWT_Cookie_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions)
    user.password = undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    })
}



module.exports.userSignup = catchAsync(async (req, res, next) => {

    // return(next(new AppError('here we goo', 401)))
    //    get user sended input and create user
    const user = await UserSchema.create(req.body)
    req.user = user;

    //  create and send user
    createSendTokenCookie(user, 201, res)
}
)


module.exports.userLogin = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //  checking user email & password
    if (!email) return next(new AppError('Provided email is incorrect', 401));
    if (!password) return next(new AppError('Provided password is incorrect', 401));

    // getting user from database 
    const user = await UserSchema.findOne({ email }).select('+password')
    if (!user) return next(new AppError('User not found', 401));

    // checking and comparing the client side vs server side password
    const correct = await user.correctPassword(password, user.password);
    if (!correct) return next(new AppError('Password incorrect', 401));

    createSendTokenCookie(user, 200, res)
}
)


exports.isLoggedIn = catchAsync(async (req, res,next) => {
    //  1). getting token and check it

    const token = req.body.token

    if (!token) return next(new AppError('Your are not logged in! Please login to get access', 401));

    // 2). Verification token like user id 
    const decoded = await promisify(jwt.verify)(token, process.env.JWTSECRET)


    // 3). Check if there user stil exit || deleted himself
    const freshUser = await UserSchema.findOne({ _id: decoded.id })
 
    if (!freshUser) {
        return next(new AppError('The user is not belong to this token! Please login to get access', 401));
    }
    
    createSendTokenCookie(freshUser, 200, res)

})

exports.logout = (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    })

    res.status(200).json({
        status: 'success'
    })
}