import { IDependencies } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../../_lib/common/error/errorResponse";
import editUserProfile from "../../infrastructure/kafka/producers/editUserProfile";

export const editUserProfileController = (dependecies:IDependencies) => {
    const { useCases: { editUserProfileUseCase,findByEmailUseCase }} = dependecies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const { email,phoneNumber,instagram,linkedIn,username,profileImageUrl,dateOfBirth,github } = req.body;


            const existingUser = await findByEmailUseCase(dependecies).execute(email)

            if(!existingUser){
                return next(ErrorResponse.unAuthorized("user not exist"))
            }

            const updatedUser = {
                ...existingUser,
                username: username || existingUser.username,
                email: email || existingUser.email,
                phoneNumber: phoneNumber || existingUser.phoneNumber,
                profile: {
                  ...existingUser.profile,
                  avatar: profileImageUrl || existingUser.profile?.avatar,
                  dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : existingUser.profile?.dateOfBirth,
                },
                contact: {
                  ...existingUser.contact,
                  socialMedia: {
                    ...existingUser.contact?.socialMedia,
                    instagram: instagram || existingUser.contact?.socialMedia?.instagram ,
                    linkedIn: linkedIn || existingUser.contact?.socialMedia?.linkedIn ,
                    github: github || existingUser.contact?.socialMedia?.github ,
                  },
                },
              };

              const editedUser = await editUserProfileUseCase(dependecies).execute(updatedUser);

              if(!editedUser){
                return next(ErrorResponse.internalError("internal error"))
              }
            //   sending data to service
              editUserProfile(editedUser,"auth-service-topic")
              editUserProfile(editedUser,"course-service-topic")
              
              res.status(200).json({success:true,data:editedUser,message:"profile edited successfully"})
        }catch(error){
            console.error(error,"error in edituseprofile")
            next(error)
        }
        
    }
}