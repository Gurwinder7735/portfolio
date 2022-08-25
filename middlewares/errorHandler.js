const { sendErrorDev, sendErrorProd, sendError, getResponseMessage } = require("../utils/helpers");

module.exports = (err,req,res,next) =>{

    
    if (err && err.error && err.error.isJoi) {
        err.message = err.error.details[0].message.replace(/\"/g,'') || 'error';
    } else{
        err.message = getResponseMessage(err.message)
    }
    return sendError(err,req,res)   


}