import ErrorResponse from "../../_lib/common/error/ErrorResponse";
import { IDependencies } from "../../application/interfaces/IDependency";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import courseStatusProducer from "../../infrastructure/kafka/producers/courseStatusProducer";

export const updateCourseController = (dependencies: IDependencies) => {
  const { useCases: { updateCourseUseCase } } = dependencies;


  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId } = req.params;
      const data = req.body;
      
      const updated = await updateCourseUseCase(dependencies).execute(courseId, data);

      if (!updated) {
        throw ErrorResponse.internalError("Data not updated");
      }

      res.status(200).json({ success: true, data: updated, message: "Course updated successfully" });
    } catch (error) {
        console.log(error);
        
      next(error);
    }
  }
}
