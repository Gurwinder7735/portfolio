const db = require("../../../models");
const AppError = require("../../../utils/appError");
const catchAsync = require("../../../utils/catchAsync");
const jwt = require('jsonwebtoken');
const {STATUS_MSG} = require('../../../config/responseMessages');
const { sendSuccess } = require("../../../utils/helpers");

module.exports = {

    handleFileUpload : catchAsync(async(req,res,next) => {
         
        console.log(req.headers,"headers");
        console.log(req.files)

               
   })

}