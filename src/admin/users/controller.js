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
   

            let user = await db.Users.findOne({
           
                    email: req.body.email,
                    password : req.body.password
                
             
            });

            console.log(user);
            // return

            if(!user){
                return sendSuccess(req,res, 400, STATUS_MSG.ERROR.LOGIN_FAILED,{})
            }

            user = user.toJSON()
            user.token =  jwt.sign({ id: user.id },process.env.JWT_SECRET_KEY);

           return sendSuccess(req,res, 200, STATUS_MSG.SUCCESS.LOGIN_SUCCESS, {user})
            
        

    }),

    register: catchAsync(async(req,res,next) => {        
   

            // const user = await db.user.findOne({
            //     where:{
            //         email: req.body.email
            //     },
            //     raw: true
            // });
            let user = await db.Users.create({
                name : req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                description: req.body.description,
                password: req.body.password,
                address: req.body.address,
                deviceType: req.body.deviceType,
                deviceToken: req.body.deviceToken
            })

            user = user.toJSON()
            user.token =  jwt.sign({ id: user.id },process.env.JWT_SECRET_KEY);


           return sendSuccess(req,res, 200, STATUS_MSG.SUCCESS.REGISTER_SUCCESS, {user})
            
        

    }),
    
    protected: catchAsync(async(req,res,next) => {
        
   
               console.log('inside protected route')
            
        

    }),
}