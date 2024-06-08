import { Router } from 'express';
import { IDependencies } from '../../application/interfaces/IDepencencies';
import { controllers } from "../../presentation/controllers/index";
import { jwtMiddleware } from '../../_lib/common/middlewares/jwtMiddleware';


export const authRoutes = (dependencies:IDependencies) => {
    const {signup,getUser,login,logout,applyToTeach} = controllers(dependencies);

    const router = Router();

    router.route("/signup").post(signup);
    router.route("/").get(jwtMiddleware,getUser)
    router.route("/login").post(login)
    router.route("/logout").delete(logout)
    router.route("/apply-to-teach").post(applyToTeach)
    return router;
}
