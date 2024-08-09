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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserProfileController = void 0;
const errorResponse_1 = __importDefault(require("../../_lib/common/error/errorResponse"));
const editUserProfile_1 = __importDefault(require("../../infrastructure/kafka/producers/editUserProfile"));
const editUserProfileController = (dependecies) => {
    const { useCases: { editUserProfileUseCase, findByEmailUseCase } } = dependecies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        try {
            const { email, phoneNumber, instagram, linkedIn, username, profileImageUrl, dateOfBirth, github } = req.body;
            const existingUser = yield findByEmailUseCase(dependecies).execute(email);
            if (!existingUser) {
                return next(errorResponse_1.default.unAuthorized("user not exist"));
            }
            const updatedUser = Object.assign(Object.assign({}, existingUser), { username: username || existingUser.username, email: email || existingUser.email, phoneNumber: phoneNumber || existingUser.phoneNumber, profile: Object.assign(Object.assign({}, existingUser.profile), { avatar: profileImageUrl || ((_a = existingUser.profile) === null || _a === void 0 ? void 0 : _a.avatar), dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : (_b = existingUser.profile) === null || _b === void 0 ? void 0 : _b.dateOfBirth }), contact: Object.assign(Object.assign({}, existingUser.contact), { socialMedia: Object.assign(Object.assign({}, (_c = existingUser.contact) === null || _c === void 0 ? void 0 : _c.socialMedia), { instagram: instagram || ((_e = (_d = existingUser.contact) === null || _d === void 0 ? void 0 : _d.socialMedia) === null || _e === void 0 ? void 0 : _e.instagram), linkedIn: linkedIn || ((_g = (_f = existingUser.contact) === null || _f === void 0 ? void 0 : _f.socialMedia) === null || _g === void 0 ? void 0 : _g.linkedIn), github: github || ((_j = (_h = existingUser.contact) === null || _h === void 0 ? void 0 : _h.socialMedia) === null || _j === void 0 ? void 0 : _j.github) }) }) });
            const editedUser = yield editUserProfileUseCase(dependecies).execute(updatedUser);
            if (!editedUser) {
                return next(errorResponse_1.default.internalError("internal error"));
            }
            //   sending data to service
            (0, editUserProfile_1.default)(editedUser, "auth-service-topic");
            (0, editUserProfile_1.default)(editedUser, "course-service-topic");
            res.status(200).json({ success: true, data: editedUser, message: "profile edited successfully" });
        }
        catch (error) {
            console.error(error, "error in edituseprofile");
            next(error);
        }
    });
};
exports.editUserProfileController = editUserProfileController;
