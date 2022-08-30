// const AppError = require("../Utilties/appError")
// const catchAsync = require("../Utilties/catchAsyncError")
const pdfTemp = require('./../Html-pdf/htmlPDF')
const pdf = require('html-pdf')
const catchAsync = require('../Utilties/catchAsyncError')
const path = require('path')
const fs = require('fs')

exports.createPDF = (req, res, next) => {
    try {

        let str = pdfTemp.html(req.body.data.data);

        pdf.create(str, {}).toFile(`Controller/resumes/${req.body.data.key}.pdf`, (err) => {
            if (err) Promise.reject()
        })
        str = ''

        Promise.resolve()
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.status(201).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            status: 'error'
        })
    }
}


exports.donwloadPDF = async (req, res) => {
    const fileName = req.body.data.key;
    await fs.readFile(path.resolve(`Controller/resumes/${fileName}.pdf`), (err, data) => {
        if (err) {
            return res.status(401).json({
                status: 'error'
            })
        }
        
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.status(201).send(data)
    })

}


exports.Helper = catchAsync(async (req, res, next) => {
    next()
})
