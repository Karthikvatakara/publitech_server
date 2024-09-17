"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructorApprovalMail = void 0;
var nodemailer_1 = require("nodemailer");
var instructorApprovalMail = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var instructor, reason, transporter, successHtml, rejectHtml, htmlContent, info, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                instructor = data.instructor, reason = data.reason;
                transporter = nodemailer_1.default.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'karthikbrototype@gmail.com',
                        pass: 'cioh pepw qxgw norq'
                    },
                });
                successHtml = function (instructor) { return "\n<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 20px;\n        }\n        .email-container {\n            background-color: #ffffff;\n            width: 100%;\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n            border-radius: 8px;\n        }\n        h2, h4 {\n            color: #333333;\n        }\n        .button {\n            background-color: #28a745;\n            color: white;\n            padding: 10px 20px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            margin: 20px 0;\n            border-radius: 4px;\n            font-size: 16px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"email-container\">\n        <h2>Congratulations, ".concat(instructor.username, "!</h2>\n        <p>Dear ").concat(instructor.username, ",</p>\n        <p>We are thrilled to inform you that your application to become an instructor on the Publitech Edu platform has been approved. Welcome to our team!</p>\n        <p>We are excited to have you with us and look forward to your contributions to our learning community.</p>\n        <p>To get started, please log in to your account and explore the instructor dashboard:</p>\n        <a class=\"button\" href=\"https://www.publitechedu.com/login\">Go to Dashboard</a>\n        <p>Should you have any questions or require further information, please do not hesitate to contact us.</p>\n        <p>Best regards,</p>\n        <p>The Publitech Edu Team</p>\n    </div>\n</body>\n</html>\n"); };
                rejectHtml = function (instructor, reason) { return "\n<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 20px;\n        }\n        .email-container {\n            background-color: #ffffff;\n            width: 100%;\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n            border-radius: 8px;\n        }\n        h2, h4 {\n            color: #333333;\n        }\n        .button {\n            background-color: #dc3545;\n            color: white;\n            padding: 10px 20px;\n            text-align: center;\n            text-decoration: none;\n            display: inline-block;\n            margin: 20px 0;\n            border-radius: 4px;\n            font-size: 16px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"email-container\">\n        <h2>Application Rejected, ".concat(instructor.username, "</h2>\n        <p>Dear ").concat(instructor.username, ",</p>\n        <p>We regret to inform you that your application to become an instructor on the Publitech Edu platform has been rejected.</p>\n        <p>Reason: ").concat(reason, "</p>\n        <p>You can resubmit your application after addressing the issues mentioned above. We encourage you to review the feedback and apply again.</p>\n        <p>For more details, please visit our guidelines page:</p>\n        <a class=\"button\" href=\"http://localhost:5173/login\">Review Guidelines</a>\n        <p>Should you have any questions or require further information, please do not hesitate to contact us.</p>\n        <p>Best regards,</p>\n        <p>The Publitech Edu Team</p>\n    </div>\n</body>\n</html>\n"); };
                htmlContent = reason === "null" ? successHtml(instructor) : rejectHtml(instructor, reason);
                return [4 /*yield*/, transporter.sendMail({
                        from: "PubliTech Education company <foo@example.com>",
                        to: instructor.email,
                        subject: "Reply for Your tutor Request",
                        html: htmlContent
                    })];
            case 1:
                info = _a.sent();
                console.log("messaga sent succesfully");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw new Error(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.instructorApprovalMail = instructorApprovalMail;
