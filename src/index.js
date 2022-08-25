'use strict';
let routes = [] , swagger = [] , swaggerSchemas = [];

if(process.env.ADMIN_ROUTES == 'true'){

    routes = [...routes, ...require('./admin/').routes]

}

if(process.env.USER_ROUTES == 'true'){

    routes = [...routes, ...require('./user/').routes]

}

if(process.env.WEBSITE_ROUTES == 'true'){

    routes = [...routes, ...require('./website/').routes]

}


if(process.env.COMMON_ROUTES == 'true'){

    routes = [...routes, ...require('./common/').routes]

}

console.log

module.exports = {
    routes,
    swagger,
    swaggerSchemas
}