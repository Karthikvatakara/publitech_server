import { getInstructorFcmToken } from "../database/repositories/getInstructorFcmToken";
import { firebase } from "../../utils/adminFirebase";

export const notifyInstructor = async (title: string, body: string, iconUrl: string, userId: string): Promise<any> => {
    console.log(`🚀 ~ notifyInstructor ~ userId: ${userId}`);
    console.log(`🚀 ~ notifyInstructor ~ iconUrl: ${iconUrl}`);
    console.log(`🚀 ~ notifyInstructor ~ body: ${body}`);
    console.log(`🚀 ~ notifyInstructor ~ title: ${title}`);

    try {
        const instructorFcmToken: null | string = await getInstructorFcmToken(userId);

        if (!instructorFcmToken) {
            console.log('No FCM tokens found for the instructor');
            return;
        }


        const message = {
            token: instructorFcmToken,
            notification: {
                title,
                body,
                image: iconUrl, 
            },
        };

        console.log("🚀 ~ notifyInstructor ~ message:", message);

        try {
            const response = await firebase.messaging().send(message);
            console.log(`Notification sent successfully to token: ${instructorFcmToken}`);
            return { success: true, token: instructorFcmToken, response };
        } catch (error) {
            console.error(`Failed to send notification to token: ${instructorFcmToken}`, error);
            return { success: false, token: instructorFcmToken, error };
        }
    } catch (error) {
        console.error('Error in notifyInstructor:', error);
        if (error instanceof Error) {
            console.error('Error Message:', error.message);
        }
        throw error;
    }
}
