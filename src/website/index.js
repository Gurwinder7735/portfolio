const router = require('express').Router();


router.use('/', require('./website').Routes);



module.exports = {
    routes : [router]
}