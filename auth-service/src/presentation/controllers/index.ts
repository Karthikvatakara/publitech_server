import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import { signupController } from "./signup";
import { getUserController } from "./getUser"
import { loginController } from "./login";
import { logoutController } from "./logout";
import { applyToTeachController } from "./applyToTeach";
import { forgotPasswordController } from "./forgotPassword";
import { updatePsswordController } from "./updatePassword"
import { googleAuthController } from "./googleAuth";
import { instructorCountController } from "./instructorCountController";
import { studentsCountController } from "./studentsCountController";
import { findInstructorByIdController } from "./IFindInstructorByIdController";

export const controllers = (dependencies:IDependencies) => {
    return {
        signup:signupController(dependencies),
        getUser:getUserController(dependencies),
        login:loginController(dependencies),
        logout:logoutController(dependencies),
        applyToTeach:applyToTeachController(dependencies),
        forgotPassword:forgotPasswordController(dependencies),
        updatePassword:updatePsswordController(dependencies),
        googleAuth:googleAuthController(dependencies),
        instructorCount: instructorCountController(dependencies),
        studentsCount: studentsCountController(dependencies),
        findInstructorById: findInstructorByIdController(dependencies)
    }
}

