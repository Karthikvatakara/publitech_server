import Joi from "joi";

export const loginValidation = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "please provide a valid email address",
        "any.required": "Email is required"
    }),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).required().messages({
        "string.pattern.base":"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
        "any.required":"password is required"
    })
})