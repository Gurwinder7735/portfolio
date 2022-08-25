const Joi = require('joi');
const validator = {};

validator.changePassword = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        // password: Joi.string().required(),
    })
};

validator.login = {
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        // password: Joi.string().required(),
    })
};

module.exports = validator;