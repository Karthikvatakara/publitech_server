import { saveFcmTokenController } from "./saveFcmTokenController";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const controllers = ( dependencies: IDependencies ) => {
    return {
        saveFcmToken: saveFcmTokenController(dependencies)
    }
}