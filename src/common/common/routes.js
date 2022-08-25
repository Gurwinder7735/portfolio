const router = require('express').Router();
const { authenticateAdmin } = require('../../../passport/index.js');
const controller = require('./controller.js');
const validators = require('./validator');
const validator = require('express-joi-validation').createValidator({ passError: true})

// console.log(validator)
router.post('/fileUpload',[validator.body(validators.fileUpload.body)], controller.handleFileUpload)

module.exports = router