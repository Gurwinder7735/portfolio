const passport = require('passport');
const db = require('../models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts =  {}
const {STATUS_MSG} = require('../config/responseMessages');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use('user', new JwtStrategy(opts,async(payload,done)=>{

    try {
        const user = await db.user.findOne({
            where:{
                id: payload.id
            }
        });

        console.log(user,"user")

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (err) {
        return done(err, false);
    }

}));

module.exports = {
    initialize: () => passport.initialize(),

    authenticateAdmin: function (req, res, next) {

        return passport.authenticate("user", {
            session: false
        }, (info, admin, err) => {
         
            
            if (err && err.name && err.name == 'JsonWebTokenError') {
                next(new AppError("Invalid token",403))                 
            }
            // console.log(STATUS_MSG.ERROR.TOKEN_NOT_FOUND,"LLL")
            if(err) next(new AppError(STATUS_MSG.ERROR.TOKEN_NOT_FOUND,401))

            if(!admin)  next(new AppError("Authorization is required!",401));

            req.admin = admin;
            
            next()
            

        })(req, res, next);
    },
}