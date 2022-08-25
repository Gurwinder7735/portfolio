const router = require('express').Router();


router.use('/', require('./users').Routes);



module.exports = {
    routes : [router]
}