module.exports = {
    STATUS_MSG : {
        SUCCESS : {
            DEFAULT :{  
                message: {
                    en: 'success',
                    ge: 'Erfolg'
                }
            },
            LOGIN_SUCCESS: {
                message: {
                    en: 'User logged in successfully!.',
                    ge: ' تم الإنشاء بنجاح '
                },
                type: 'LOGIN_SUCCESS'
            },
            REGISTER_SUCCESS: {
                message: {
                    en: 'User registered successfully!.',
                    ge: ' تم الإنشاء بنجاح '
                },
                type: 'LOGIN_SUCCESS'
            },
        },

        ERROR : {
            DEFAULT: {
                message: {
                    en: 'Error',
                    ge: ' تم الإنشاء بنجاح '
                },
                type: 'DEFAULT'
            },
            LOGIN_FAILED: {
                message: {
                    en: 'Invalid email or password',
                    ge: ' تم الإنشاء بنجاح '
                },
                type: 'DEFAULT'
            },
            TOKEN_EXPIRED: {
                message: {
                    en: 'Token Expired',
                    ge: ' انتهت صلاحية الرمز '
                },
                type: 'TOKEN_EXPIRED'
            },
            TOKEN_NOT_FOUND: {
                message: {
                    en: 'TOKEN_NOT_FOUND',
                    ge: ' انتهت صلاحية الرمز '
                },
                type: 'TOKEN_NOT_FOUND'
            },
            CREATED: {
                message: {
                    en: 'Successfully created.',
                    ge: ' تم الإنشاء بنجاح '
                },
                type: 'CREATED'
            },
        }
    }
}