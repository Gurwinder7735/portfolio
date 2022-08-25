const db = require("../../../models");
const AppError = require("../../../utils/appError");
const catchAsync = require("../../../utils/catchAsync");
const jwt = require('jsonwebtoken');
const {STATUS_MSG} = require('../../../config/responseMessages');
const { sendSuccess } = require("../../../utils/helpers");

module.exports = {

    getUser: catchAsync(async(req,res,next) => {
        next(new AppError(STATUS_MSG.SUCCESS.DEFAULT, 500));
    }),

    login: catchAsync(async(req,res,next) => {        
   

            const user = await db.user.findOne({
                where:{
                    email: req.body.email
                },
                raw: true
            });

            user.token =  jwt.sign({ id: user.id },process.env.JWT_SECRET_KEY);

           return sendSuccess(req,res, 200, STATUS_MSG.SUCCESS.LOGIN_SUCCESS, {user})
            
        

    }),
    
    protected: catchAsync(async(req,res,next) => {
        
   
               console.log('inside protected route')
            
        

    }),
}