module.exports = {

    sendSuccess: (req,res,status,message,data, ) => {
       return res.status(status).json({
           success : 1,
           status: status || 200,
           message: module.exports.getResponseMessage(message, req.headers.lang),
           data
       });
    }, 

    sendErrorDev : (err,req,res) => {

       return res.status(err.statusCode || 500).json({
           success : 0,
           status: err.statusCode || 500,
           message: module.exports.getResponseMessage(err.message, req.headers.lang),
           data: {},
           stack : err.stack
       });

    },
    sendErrorProd : (err,req,res) => {

        return res.status(err.statusCode || 500).json({
            success : 0,
            message: "something went wrong!",
            data: {}
        });
 
     },
     
    sendError: (err,req,res) => {
        if(["development","test"].includes(process.env.NODE_ENV)){
            return module.exports.sendErrorDev(err,req,res);
        }else if(process.env.NODE_ENV == 'production'){
            return module.exports.sendErrorProd(err,req,res)
        }
    },

    getResponseMessage : (msg,lang) => typeof(msg) == 'object' ?  msg.message[lang || "en"] : msg
}