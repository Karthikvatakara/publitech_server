import crypto from "crypto";

export const generateVerificationOtp = () => {
    const length = 4;
    const digits = '0123456789';
    const digitsLength = digits.length;

    let otp = '';

    const randomBytes = crypto.randomBytes(length);

    for(let i = 0; i < length; i++) {
        const randomIndex = randomBytes[i] % digitsLength;
        otp += digits[randomIndex]
    }

    return otp;
}