const Joi = require('joi');
const validator = {};

validator.fileUpload = {
    body: Joi.object({
        // file: Joi.string().required(),
        // email: Joi.string().required(),
        // password: Joi.string().required(),
    })
};


module.exports = validator;