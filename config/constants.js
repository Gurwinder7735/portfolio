
'use strict';

const Joi = require("joi");


const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    JWT_SECRET_KEY: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
  })
.unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}


const STATUSCODE = {
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    SUCCESS: 200,
    UNAUTHORIZE: 401,
    CREATED: 201,
    APP_ERROR: 402,
    ROLE_CHANGE: 403
};

const SERVER = {
    APP_NAME: 'App Name',
    TOKEN_EXPIRATION: 60 * 60 * 24 * 30, // expires in 24 hours * 7 days
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    PORT: process.env.port || 3000,
    PAYMENT_GATEWAY: {
        URL: 'https://test.oppwa.com',
        BASIC_PATH: '/v1/checkouts',
    }
};

const DATABASE = {

    CONFIG: {
        DEVELOPMENT: {
         MONGO_URI: `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`
        },
        TEST: {
         MONGO_URI: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`
        },
        PRODUCTION: {
         MONGO_URI: `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`
        }
      },

    USER_ROLES: {
      1: 'USER',
      2: 'BUSINESS'
    },

    DEVICE_TYPES: {
        1: 'IOS',
        2: 'ANDROID'
    },  

    LANGUAGE: {
        EN: 'EN',
        AR: 'AR'
    },
  
    STATUS: {
        ACTIVE: "ACTIVE",
        BLOCKED: "BLOCKED",
        DELETED: "DELETED",
        INACTIVE: "INACTIVE"
    },
    
    DEFAULT_IMAGE: {
        ORIGINAL: "https://www.femina.in/images/default-user.png",
        THUMBNAIL: "https://www.femina.in/images/default-user.png",
    },

    CHAT_TYPE: {
        ONE_TO_ONE_CHAT: 'ONE_TO_ONE_CHAT',
        GROUP_CHAT: 'GROUP_CHAT'
    }

};


const CONSTANTS = {
    SERVER: SERVER,
    DATABASE: DATABASE,
    STATUSCODE: STATUSCODE,
};

module.exports = CONSTANTS;
