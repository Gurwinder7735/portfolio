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

validator.register = {
    body: Joi.object({
        name : Joi.string().required(),
        email: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        description: Joi.string().required(),
        password: Joi.string().required(),
        address: Joi.string().required(),
        deviceToken: Joi.string().required(),
        deviceType: Joi.string().required()
        // password: Joi.string().required(),
    })
};

module.exports = validator;