import { User } from "../models";

export const getInstructorFcmToken = async( userId: string )=> {
    try{
        const instructor = await User.findById(userId);

        return instructor?.fcmTokens;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}