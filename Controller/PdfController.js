// const AppError = require("../Utilties/appError")
// const catchAsync = require("../Utilties/catchAsyncError")
const pdfTemp = require('./../Html-pdf/htmlPDF')
const pdf = require('html-pdf')
const catchAsync = require('../Utilties/catchAsyncError')


exports.createPDF = (req,res,next) => {
    console.log(req.body);
    pdf.create(pdfTemp.html(),{}).toFile('Controller/resumes/file.pdf', (err)=>{
        if(err) Promise.reject()
    })
    
    Promise.resolve()
    res.status(201).json({
        status:'success'
    })
}


exports.donwloadPDF = (req,res) => {
 res.status(201).sendFile(`${__dirname}/resumes/file.pdf`)   
}


exports.Helper = catchAsync(async (req,res,next) => {
    next()
})
