const bodyParser = require('body-parser');
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const compression = require('compression')

const userRouter = require('./Router/UserRouter');
const pdfRouter = require('./Router/PdfRouter');

const mainErrorHandler = require('./Utilties/errorController');
const AppError = require('./Utilties/appError');

const app = express();


 
// 
app.use(compression());

// cors policy
app.use(cors())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.all('/*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
//  });

// body parsers & cookies
app.use(bodyParser.json({limit : '10kb'}));
app.use(bodyParser.urlencoded({extended : true, limit:'10kb'}))
app.use(cookieParser());


// main user router
app.use('/api/v1', userRouter);
app.use('/api/v1/resume',pdfRouter);

app.use('/',(req,res )=>{
   res.status(200).json({
      status : "success",
      message : "your are viewing Mk Niazi application api"
   })
})
// global express error handler
app.all('*', (req, res,next) => {
   next(new AppError(`Error 🔥 : The given ${req.originalUrl}`, 404))
})


app.use(mainErrorHandler)

// default export app module
module.exports = app;


