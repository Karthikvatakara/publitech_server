"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVerificationOtp = void 0;
var crypto_1 = require("crypto");
var generateVerificationOtp = function () {
    var length = 4;
    var digits = '0123456789';
    var digitsLength = digits.length;
    var otp = '';
    var randomBytes = crypto_1.default.randomBytes(length);
    for (var i = 0; i < length; i++) {
        var randomIndex = randomBytes[i] % digitsLength;
        otp += digits[randomIndex];
    }
    return otp;
};
exports.generateVerificationOtp = generateVerificationOtp;
