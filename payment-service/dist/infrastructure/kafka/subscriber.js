"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = void 0;
const userCreatedConsumer_1 = __importDefault(require("./consumer/userCreatedConsumer"));
const editUserProfileConsumer_1 = __importDefault(require("./consumer/editUserProfileConsumer"));
const updateCourseStatus_1 = __importDefault(require("./consumer/updateCourseStatus"));
const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer_1.default,
        editUserProfile: editUserProfileConsumer_1.default,
        courseStatusUpdated: updateCourseStatus_1.default
    };
};
exports.createSubscriber = createSubscriber;
