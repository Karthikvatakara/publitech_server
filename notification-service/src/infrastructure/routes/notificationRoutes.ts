import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers/index";
import { Router } from "express";
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";

export const notificationRoutes = ( dependencies: IDependencies ) => {
    const { saveFcmToken } = controllers(dependencies);

    const router = Router();

    router.route("/fcmToken").post(jwtMiddleware,saveFcmToken);
    
    return router;
}