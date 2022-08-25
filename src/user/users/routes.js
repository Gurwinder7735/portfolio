const router = require('express').Router();
const { authenticateAdmin } = require('../../../passport/index.js');
const controller = require('./controller.js');
const validators = require('./validator');
const validator = require('express-joi-validation').createValidator({ passError: true})

// console.log(validator)
router.post('/users',[validator.body(validators.changePassword.body)], controller.getUser);
router.post('/user/login',[validator.body(validators.login.body)], controller.login);
router.post('/user/protected',[authenticateAdmin], controller.protected);


module.exports = router