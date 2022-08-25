const AppError = require('./appError')

const setCastError = err => new AppError(`the user isnt found with ID : / ${err.value} /`, 404)
const setDuplicateNameError = err => {
    if (err.keyPattern.email === 1) err.keyValue.name = 'Email';
    const msg = err.keyValue.name == 'Email' ? `Already user have same : / ${err.keyValue.name} /` : `Already user have same name : / ${err.keyValue.name} /`
    return (new AppError(msg, 404))
}


const setValidatorError = err => {
    const msgs = Object.values(err.errors).map(el => el.message).join(',');
    return(new AppError(`/ ${msgs}  /`, 404));
}


const setJwtError = err => new AppError(`${err.message}! Please login again`, 401)


const errorController = (err, req, res, next) => {
    // if error is trustworthy then response


    if (err.isOperational) {
        return res.status(err.statusCode).json({
            message: err.message ? err.message : err.Newmessage,
            statusCode: err.statusCode,
            isOperational: err.isOperational,
        })
    }

    else {
        // if error is un-trustworthy then response
        // console.log(err);
        return res.status(500).json({
            status: err.status,
            message: err.message,
            message2 : err._message,
            statusCode: err.statusCode,
            isOperational: err.isOperational,
            error: err,
        })
    }
}




const mainErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';



    if (err) {
        // checking mongoDB errors 
        let error = { ...err }
        if (err.name === 'MongoNetworkError') error.message = 'Mongo Not working';
        if (err.name === 'CastError') error = setCastError(error);
        if (err.code === 11000) error = setDuplicateNameError(error);
        if (err._message === 'Tour validation failed') error = setValidatorError(error);
        if (err._message === 'users validation failed') error = setValidatorError(error);

        // checking jwt errors
        if (err.name === 'JsonWebTokenError') error = setJwtError(error);
        if (err.name === 'TokenExpiredError') error = setJwtError(error);

        // error handelor
        errorController(err, req, res, next);
    }

    // next()
}

module.exports = mainErrorHandler;