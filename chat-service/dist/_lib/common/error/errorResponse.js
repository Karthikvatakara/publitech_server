"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        this.success = false;
    }
    static badRequest(msg) {
        return new ErrorResponse(400, msg || "Bad Request");
    }
    static unAuthorized(msg) {
        return new ErrorResponse(401, msg || "unAuthorized");
    }
    static forbidden(msg) {
        return new ErrorResponse(403, msg || "Forbidden");
    }
    static notFound(msg) {
        return new ErrorResponse(404, msg || "Not found");
    }
    static conflict(msg) {
        return new ErrorResponse(409, msg || "conflict");
    }
    static internalError(msg) {
        return new ErrorResponse(500, msg || "internal server error");
    }
}
exports.default = ErrorResponse;
