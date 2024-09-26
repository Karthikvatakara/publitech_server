import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";
import { ObjectId,Types } from "mongoose";

export const createCourseController = (dependencies:IDependencies)=>{
    const {useCases: { createCourseUseCase }} = dependencies;

    const toObjectId = (id: string) => new Types.ObjectId(id);

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const data = req.body;
            console.log("Received Data:", JSON.stringify(data, null, 2));

            data.categoryRef = toObjectId(data.categoryRef);
            data.instructorRef = toObjectId(data.instructorRef);

            // if (data.isPaid !== undefined) {
            //     data.pricing.type = data.isPaid ? 'paid' : 'free';
            // }

            // Additional logging to check required fields
            if (!data.trial.title || !data.trial.description || !data.trial.thumbnail || !data.trial.video) {
                throw new Error("Trial data is missing required fields");
            }

            if (data.lessons) {
                data.lessons.forEach((lesson: any, index: number) => {
                    if (!lesson.title || !lesson.description || !lesson.thumbnail || !lesson.video) {
                        throw new Error(`Lesson ${index + 1} is missing required fields`);
                    }
                });
            }

            console.log("Processed Data:", JSON.stringify(data, null, 2));
            const createdCourse = await createCourseUseCase(dependencies).execute(data);
            console.log("🚀 ~ returnasync ~ createdCourse:", createdCourse)

            if(!createdCourse){
                throw ErrorResponse.internalError("course not created")
            }
            
            res.status(200).json({success:true,data:createdCourse,message:"user created succesfully"})
        }catch(error){
            next(error)
        }
    }
}