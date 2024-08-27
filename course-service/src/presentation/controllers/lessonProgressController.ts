import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const lessonProgressController = ( dependencies: IDependencies ) => {
    const {useCases: { lessonProgressUseCase } } = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { userId , courseId, lessonId, timeWatched, totalDuration } = req.body;
            // console.log("🚀 ~ returnasync ~ totalDuration:", totalDuration)
            // console.log("🚀 ~ returnasync ~ timeWatched:", timeWatched)
            // console.log("🚀 ~ returnasync ~ courseId:", courseId)
            // console.log("🚀 ~ returnasync ~ userId:", userId)
            // console.log("🚀 ~ returnasync ~ lessonId:", lessonId)

            const progressData = await lessonProgressUseCase(dependencies).execute(userId,courseId,lessonId,timeWatched,totalDuration)

             res.status(200).json({ success: true, message:" progress updated succesfully"})
        }catch(error){
            next(error);
        }
    }
}