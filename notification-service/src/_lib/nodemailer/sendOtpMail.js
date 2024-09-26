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
exports.sendOtpMail = void 0;
var generateVerificationMail_1 = require("./generateVerificationMail");
var sendOtpMail = function (email, otp) { return __awaiter(void 0, void 0, void 0, function () {
    var mailResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, generateVerificationMail_1.generateVerificationMail)(email, "Email verification", "<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Email Verification</title>\n            <style>\n                body {\n                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n                    background-color: #f0f0f0;\n                    margin: 0;\n                    padding: 0;\n                    color: #333;\n                }\n\n                .container {\n                    max-width: 600px;\n                    margin: 40px auto;\n                    background-color: #fff;\n                    padding: 20px;\n                    border-radius: 10px;\n                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n                }\n\n                .header {\n                    background-color: #4CAF50;\n                    padding: 10px;\n                    border-top-left-radius: 10px;\n                    border-top-right-radius: 10px;\n                    text-align: center;\n                    color: #fff;\n                }\n\n                .header h1 {\n                    margin: 0;\n                    font-size: 24px;\n                }\n\n                .content {\n                    padding: 20px;\n                    text-align: center;\n                }\n\n                .content p {\n                    font-size: 16px;\n                    margin: 0 0 10px;\n                }\n\n                .otp-code {\n                    display: inline-block;\n                    margin: 20px 0;\n                    padding: 10px 20px;\n                    font-size: 24px;\n                    font-weight: bold;\n                    color: #fff;\n                    background-color: #4CAF50;\n                    border-radius: 5px;\n                }\n\n                .footer {\n                    margin-top: 20px;\n                    font-size: 14px;\n                    text-align: center;\n                    color: #aaa;\n                }\n\n                .footer p {\n                    margin: 5px 0;\n                }\n\n                @media (max-width: 600px) {\n                    .container {\n                        width: 90%;\n                        padding: 10px;\n                    }\n\n                    .header h1 {\n                        font-size: 20px;\n                    }\n\n                    .content p {\n                        font-size: 14px;\n                    }\n\n                    .otp-code {\n                        font-size: 20px;\n                    }\n                }\n            </style>\n        </head>\n        <body>\n            <div class=\"container\">\n                <div class=\"header\">\n                    <h1>Email Verification</h1>\n                </div>\n                <div class=\"content\">\n                    <p>Dear User,</p>\n                    <p>We have received a request to verify your email address. Please use the following OTP code to complete the verification:</p>\n                    <div class=\"otp-code\">".concat(otp, "</div>\n                    <p>If you didn't request this OTP, please ignore this email.</p>\n                </div>\n                <div class=\"footer\">\n                    <p>Best regards,</p>\n                    <p>PubliTech</p>\n                    <p>&copy; 2024 Publitech. All rights reserved.</p>\n                </div>\n            </div>\n        </body>\n        </html>\n        "))];
            case 1:
                mailResponse = _a.sent();
                console.log("Email sent successfully: ", mailResponse);
                return [2 /*return*/];
        }
    });
}); };
exports.sendOtpMail = sendOtpMail;
