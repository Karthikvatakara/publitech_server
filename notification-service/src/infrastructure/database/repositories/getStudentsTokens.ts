import { User } from "../models";

export const getStudentsTokens = async (): Promise<(string | null)[]> => {
    try {
        const students = await User.find({ role: 'student' });
        return students.map(student => student.fcmTokens || null);
    } catch (error) {
        throw new Error((error as Error)?.message);
    }
}