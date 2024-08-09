"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    const statusCode = error.status || 400;
    return res.status(400).json({
        success: false,
        status: error.statusCode,
        message: error.message || "something went wrong"
    });
};
exports.errorHandler = errorHandler;
