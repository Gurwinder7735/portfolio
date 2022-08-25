'use strict';
require('dotenv').config();
require('./config/config.js')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');


// const db = require('./models');
const baseMiddleware = require('./middlewares/baseMiddleware');
const errorHandler = require('./middlewares/errorHandler');
const passport = require('./passport');

// const passprt = require('passport');

const app = express();


// ROUTES
const [adminAPI, userAPI, website,commonAPI] = require('./src').routes;
const CONSTANTS = require('./config/constants');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARES

app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// middleware for uploadig files
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(baseMiddleware)

if(process.env.USER_ROUTES == "true"){
  app.use('/api', userAPI)
}
if(process.env.COMMON_ROUTES == "true"){
  app.use('/api', commonAPI)
}
if(process.env.ADMIN_ROUTES == "true"){
  app.use('/api/admin', adminAPI);
}
if(process.env.WEBSITE_ROUTES == "true"){
  app.use('/', website);
}

app.use(errorHandler);

module.exports = app;
