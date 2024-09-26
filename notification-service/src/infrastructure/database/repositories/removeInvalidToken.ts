import { User } from "../models";

export const removeInvalidToken = async( userId: string, invalidToken: string )=> {
    try{
        await User.findByIdAndUpdate(userId, {
            $pull: { fcmTokens: invalidToken }
        });
        console.log(`Removed invalid token ${invalidToken} for user ${userId}`);
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}