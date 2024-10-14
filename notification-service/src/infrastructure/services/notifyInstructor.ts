import { getInstructorFcmToken } from "../database/repositories/getInstructorFcmToken";
import { firebase } from "../../utils/adminFirebase";
import { removeInvalidTokens } from "../database/repositories/removeInvalidToken";
import { MulticastMessage } from "firebase-admin/messaging";


export const notifyInstructor = async (title: string, body: string, iconUrl: string, userId: string): Promise<any> => {
    console.log(`🚀 ~ notifyInstructor ~ userId: ${userId}`);
    console.log(`🚀 ~ notifyInstructor ~ iconUrl: ${iconUrl}`);
    console.log(`🚀 ~ notifyInstructor ~ body: ${body}`);
    console.log(`🚀 ~ notifyInstructor ~ title: ${title}`);

    try {
        const instructorFcmTokens: string[] = await getInstructorFcmToken(userId);

        if (instructorFcmTokens.length === 0) {
            console.log('No FCM tokens found for the instructor');
            return;
        }
      
        const message: MulticastMessage = {
            tokens: instructorFcmTokens,
            notification: {
                title,
                body,
                imageUrl: iconUrl,
            },
        };

        console.log("🚀 ~ notifyInstructor ~ message:", message);

        const response = await firebase.messaging().sendEachForMulticast(message);

        console.log(`${response.successCount} messages were sent successfully`);
        console.log(`${response.failureCount} messages failed to send`);

        if (response.failureCount > 0) {
            const failedTokens = response.responses
                .map((resp, idx) => resp.success ? null : instructorFcmTokens[idx])
                .filter((token): token is string => token !== null);

            console.log('List of tokens that caused failures:', failedTokens);

         
            await removeInvalidTokens(userId, failedTokens);
        }

        return response;
    } catch (error) {
        console.error('Error in notifyInstructor:', error);
        if (error instanceof Error) {
            console.error('Error Message:', error.message);
        }
        throw error;
    }
}