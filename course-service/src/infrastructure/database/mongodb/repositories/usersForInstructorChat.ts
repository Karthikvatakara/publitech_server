import { Types } from "mongoose"
import { course, Enrollment, User } from "../models"


export const usersForInstructorChat = async ( instructorId : string) => {
    try{

        const objectId = new Types.ObjectId(instructorId)
        const users = await course.aggregate([
            // Match courses by the instructor
            {
              $match: {
                instructorRef: objectId
              }
            },
            // Look up enrollments for these courses
            {
              $lookup: {
                from: 'enrollments',
                localField: '_id',
                foreignField: 'courseId',
                as: 'enrollments'
              }
            },
            // Unwind the enrollments array
            {
              $unwind: '$enrollments'
            },
            // Group by user ID to remove duplicates
            {
              $group: {
                _id: '$enrollments.userId'
              }
            },
            // Look up user details
            {
              $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: '_id',
                as: 'userDetails'
              }
            },
            // Unwind the userDetails array
            {
              $unwind: '$userDetails'
            },
            // Project only the fields you need
            {
              $project: {
                _id: '$userDetails._id',
                username: '$userDetails.username',
                email: '$userDetails.email',
                avatar: '$userDetails.profile.avatar'
              }
            }
          ]);

          if( !users ) {
            throw new Error("users not found")
          }

          return users;
          
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}