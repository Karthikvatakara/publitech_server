import Joi from "joi";

export const applyToTeachValidation = Joi.object({
    email: Joi.string().required(),
    profession: Joi.string().required(),
    profileDescription: Joi.string().required(),
    linkedIn: Joi.string().uri().optional().allow(null,""),
    github: Joi.string().uri().optional().allow(null,""),
    mobile: Joi.string().pattern(/^[0-9]+$/).required(),
})