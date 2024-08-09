import { IDependencies } from "../../application/interfaces/IDependency";
import { findAppliedInstructorController } from "./findAppliedInstructor";
import { approveInstructorController } from "./approveInstructor";
import { getallInstructorsController } from "./getallInstructors";
import { blockInstructorController } from "./blockInstructor";
import { editUserProfileController } from "./editUserProfile";

export const controllers = (dependencies:IDependencies) => {
    return {
        findAppliedInstructor: findAppliedInstructorController(dependencies),
        approveInstructor:approveInstructorController(dependencies),
        getallInstructors:getallInstructorsController(dependencies),
        blockInstructor:blockInstructorController(dependencies),
        editUserProfile:editUserProfileController(dependencies)
    }
}