
const express = require('express');
const PdfController = require('./../Controller/PdfController')
const Router = express.Router()

Router.post('/create-pdf',PdfController.Helper,PdfController.createPDF);
Router.post('/download-pdf',PdfController.Helper,PdfController.donwloadPDF);






module.exports = Router;