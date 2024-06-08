import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import { signupController } from "./signup";
import { getUserController } from "./getUser"
import { loginController } from "./login";
import { logoutController } from "./logout";
import { applyToTeachController } from "./applyToTeach";
import { applyToTeach } from "../../infrastructure/database/mongoDb/repositories";

export const controllers = (dependencies:IDependencies) => {
    return {
        signup:signupController(dependencies),
        getUser:getUserController(dependencies),
        login:loginController(dependencies),
        logout:logoutController(dependencies),
        applyToTeach:applyToTeachController(dependencies)
    }
}

