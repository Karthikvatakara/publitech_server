import crypto from "crypto";

export const generateRandomString = ():string => {
    return crypto.randomBytes(64).toString('hex');
}