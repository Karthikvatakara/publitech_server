import ErrorResponse from "../../error/ErrorResponse";

export default class errorResponse extends Error {
    public status: number;
    public message: string;
    public success: false;

    constructor(status: number,message: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.success = false
    }

    static badRequest(message:string): ErrorResponse {
        return new ErrorResponse(400,message || "Bad request");
    }

    static unAuthorized(message:string): ErrorResponse {
        return new ErrorResponse(401,message || "unauthorized")
    }

    static forbidden(message:string): ErrorResponse {
        return new ErrorResponse(403,message || "forbidden")
    }

    static notFound(message:string): ErrorResponse {
        return new ErrorResponse(404,message || "not found")
    }

    static conflict(message:string): ErrorResponse {
        return new ErrorResponse(409,message || "conflict")
    }

    static internalError(message: string):ErrorResponse {
        return new ErrorResponse(500,message ||"internal server error");
    }
}