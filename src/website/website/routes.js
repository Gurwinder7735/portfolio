const router = require('express').Router();
const { authenticateAdmin } = require('../../../passport/index.js');
const controller = require('./controller.js');
const validators = require('./validator');
const validator = require('express-joi-validation').createValidator({ passError: true})

// console.log(validator)
router.get('/' ,controller.getHome);


module.exports = router