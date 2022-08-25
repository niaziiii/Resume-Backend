const express = require('express');
const userController = require('./../Controller/UserController')
const Router = express.Router()

Router.post('/login',userController.userLogin);
Router.post('/signup',userController.userSignup);
Router.post('/loggedIn',userController.isLoggedIn);
Router.get('/logout',userController.logout);




module.exports = Router;