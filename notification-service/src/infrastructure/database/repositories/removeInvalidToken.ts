import { User } from "../models";

export const removeInvalidTokens = async (userId: string, invalidTokens: string[]): Promise<void> => {
    try {
        await User.findByIdAndUpdate(userId, {
            $pull: { fcmTokens: { $in: invalidTokens } }
        });
        console.log(`Removed ${invalidTokens.length} invalid tokens for user ${userId}`);
    } catch (error) {
        console.error('Error removing invalid tokens:', error);
        throw new Error((error as Error)?.message);
    }
}