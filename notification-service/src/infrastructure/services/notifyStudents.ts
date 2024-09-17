import { getStudentsTokens } from "../database/repositories/getStudentsTokens";
import { firebase } from "../../utils/adminFirebase";

export const notifyStudents = async (title: string, body: string) => {
  try {
    const studentTokens = await getStudentsTokens();
    console.log("🚀 ~ notifyStudents ~ studentTokens:", studentTokens);

    // Filter out undefined values and ensure valid tokens
    const validTokens: string[] = studentTokens
      .flat() // Flattens nested arrays, if any
      .filter((token): token is string => token !== undefined);
      
    console.log("🚀 ~ notifyStudents ~ validTokens:", validTokens)

    // Send notifications to each token individually
    const sendPromises = validTokens.map(async (token) => {
      const message = {
        token: token,
        notification: {
          title,
          body,
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
    console.error('Error in notifyStudents:', error);
    if (error instanceof Error) {
      console.error('Error Message:', error.message);
    }
    throw error;
  }
};