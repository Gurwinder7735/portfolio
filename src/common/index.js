const router = require('express').Router();


router.use('/', require('./common').Routes);



module.exports = {
    routes : [router]
}