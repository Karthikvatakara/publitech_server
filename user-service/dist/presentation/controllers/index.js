"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const findAppliedInstructor_1 = require("./findAppliedInstructor");
const approveInstructor_1 = require("./approveInstructor");
const getallInstructors_1 = require("./getallInstructors");
const blockInstructor_1 = require("./blockInstructor");
const editUserProfile_1 = require("./editUserProfile");
const controllers = (dependencies) => {
    return {
        findAppliedInstructor: (0, findAppliedInstructor_1.findAppliedInstructorController)(dependencies),
        approveInstructor: (0, approveInstructor_1.approveInstructorController)(dependencies),
        getallInstructors: (0, getallInstructors_1.getallInstructorsController)(dependencies),
        blockInstructor: (0, blockInstructor_1.blockInstructorController)(dependencies),
        editUserProfile: (0, editUserProfile_1.editUserProfileController)(dependencies)
    };
};
exports.controllers = controllers;
