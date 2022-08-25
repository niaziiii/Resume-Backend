const bodyParser = require('body-parser');
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const compression = require('compression')

const userRouter = require('./Router/UserRouter');
const mainErrorHandler = require('./Utilties/errorController');
const AppError = require('./Utilties/appError');

const app = express();





// 
app.use(compression());

// cors policy
app.use(cors())
app.options('*', cors())


// body parsers & cookies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())


// main user router
app.use('/api/v1', userRouter);

// global express error handler
app.all('*', (req, res,next) => {
   next(new AppError(`Error 🔥 : The given ${req.originalUrl}`, 404))
})


app.use(mainErrorHandler)

// default export app module
module.exports = app;

