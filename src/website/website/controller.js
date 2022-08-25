const db = require("../../../models");
const AppError = require("../../../utils/appError");
const catchAsync = require("../../../utils/catchAsync");
const jwt = require('jsonwebtoken');
const {STATUS_MSG} = require('../../../config/responseMessages');
const { sendSuccess } = require("../../../utils/helpers");

module.exports = {
    getHome: catchAsync(async(req,res,next) => {
        // next(new AppError(STATUS_MSG.SUCCESS.DEFAULT, 500));
        return res.render('website')
    }),



}