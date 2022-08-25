const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcrypt')

const schema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name isnt provided']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name isnt provided']
    },
    email: {
        type: String,
        required: [true, 'Email isnt provided'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Email isnt provided Correctly']
    },
    password: {
        type: String,
        required: [true, 'Pasword isnt provided'],
        select: false,
        minlength: [8, 'Password must have more than 8 charcter'],
    },

    active: {
        type: Boolean,
        default: true,
        select: false
    }

})


schema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    const password = await bcrypt.hash(this.password, 12);
    this.password = password;
    next()
})

schema.methods.correctPassword = async function (candidatePass, userPass) {
    return await bcrypt.compare(candidatePass, userPass)
}
const User = mongoose.model('users', schema);


module.exports = User;