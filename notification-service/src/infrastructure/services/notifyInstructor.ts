import { getInstructorFcmToken } from "../database/repositories/getInstructorFcmToken";
import { firebase } from "../../utils/adminFirebase";

export const notifyInstructor = async (title: string, body: string, iconUrl: string, userId: string): Promise<any> => {
    console.log(`🚀 ~ notifyInstructor ~ userId: ${userId}`);
    console.log(`🚀 ~ notifyInstructor ~ iconUrl: ${iconUrl}`);
    console.log(`🚀 ~ notifyInstructor ~ body: ${body}`);
    console.log(`🚀 ~ notifyInstructor ~ title: ${title}`);

    try {
        const instructorFcmToken: any = await getInstructorFcmToken(userId);

        const validTokens: string[] = instructorFcmToken
            .flat() // Flattens nested arrays, if any
            .filter((token:string): token is string => token !== undefined);

        const sendPromises = validTokens.map(async (token) => {
            const message = {
                token: token,
                notification: {
                    title,
                    body,
                    image: iconUrl,
                },
            };

            console.log("🚀 ~ notifyStudents ~ message:", message);

            try {
                const response = await firebase.messaging().send(message);
                console.log(`Notification sent successfully to token: ${token}`);
                return { success: true, token, response };
            } catch (error) {
                console.error(`Failed to send notification to token: ${token}`, error);
                return { success: false, token, error };
            }
        });

        const results = await Promise.all(sendPromises);

        const successCount = results.filter(r => r.success).length;
        const failureCount = results.filter(r => !r.success).length;

        console.log(`Successfully sent ${successCount} notifications`);
        console.log(`Failed to send ${failureCount} notifications`);

        const failedTokens = results.filter(r => !r.success).map(r => r.token);
        if (failedTokens.length > 0) {
            console.log('List of tokens that caused failures: ' + failedTokens.join(', '));
        }

        return results;
    } catch (error) {
        console.error('Error in notifyInstructor:', error);
        if (error instanceof Error) {
            console.error('Error Message:', error.message);
        }
        throw error;
    }
}