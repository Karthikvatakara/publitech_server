"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 400;
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: error.message || "something went wrong"
    });
};
exports.default = errorHandler;
