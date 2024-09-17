import { UserEntity } from "../../../domain/entities";
import { User } from "../models";

export const saveFcmToken = async( token: string, userId: string ): Promise<UserEntity | null> => {
    try{
        const user = await User.findById(userId);
        console.log("🚀 ~ saveFcmToken ~ user:", user)

        if(!user){
            throw new Error("user not found")
        }

        if(!user.fcmTokens?.includes(token)){
            user.fcmTokens?.push(token);
            await user.save();
        }

        return user;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}