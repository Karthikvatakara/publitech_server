import { UserEntity } from "../../../domain/entities";
import { User } from "../models";

export const saveFcmToken = async( token: string, userId: string ): Promise<UserEntity | null> => {
    try{
        const user = await User.findById(userId);
        console.log("🚀 ~ saveFcmToken ~ user:", user)

        if (!user) {
            throw new Error("User not found")
        }

        if (user?.fcmTokens !== token) {
            user.fcmTokens = token;
            await user.save();
            console.log("FCM token updated for user:", userId);
        } else {
            console.log("FCM token unchanged for user:", userId);
        }

        return user;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}