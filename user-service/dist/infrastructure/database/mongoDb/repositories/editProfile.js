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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserProfile = void 0;
const User_1 = require("../models/User");
const editUserProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        const { email } = data, restValues = __rest(data, ["email"]);
        // Define updateData with an index signature
        const updateData = {
            username: restValues.username,
            phoneNumber: restValues.phoneNumber,
            "profile.avatar": (_a = restValues.profile) === null || _a === void 0 ? void 0 : _a.avatar,
            "profile.dateOfBirth": (_b = restValues.profile) === null || _b === void 0 ? void 0 : _b.dateOfBirth,
            "contact.socialMedia.instagram": (_d = (_c = restValues.contact) === null || _c === void 0 ? void 0 : _c.socialMedia) === null || _d === void 0 ? void 0 : _d.instagram,
            "contact.socialMedia.linkedIn": (_f = (_e = restValues.contact) === null || _e === void 0 ? void 0 : _e.socialMedia) === null || _f === void 0 ? void 0 : _f.linkedIn,
            "contact.socialMedia.github": (_h = (_g = restValues.contact) === null || _g === void 0 ? void 0 : _g.socialMedia) === null || _h === void 0 ? void 0 : _h.github,
        };
        // Remove undefined values from updateData
        Object.keys(updateData).forEach(key => {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        });
        // Perform the update operation
        const user = yield User_1.User.findOneAndUpdate({ email: email }, { $set: updateData }, { new: true, runValidators: true });
        // const user = await User.findByIdAndUpdate(data._id,data,{new:true});
        console.log("🚀 ~ editUserProfile ~ user:", user);
        return user;
    }
    catch (error) {
        console.error("Error in editUserProfile:", error);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.editUserProfile = editUserProfile;
