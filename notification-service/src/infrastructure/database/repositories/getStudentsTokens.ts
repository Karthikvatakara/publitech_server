import { UserEntity } from "../../../domain/entities";
import { User } from "../models"

export const getStudentsTokens = async() => {

    const students = await User.find({ role: "student"});

    const studentfcmtokens = students.map(student => student.fcmTokens)
    console.log("🚀 ~ getStudentsTokens ~ studentfcmtokens:", studentfcmtokens);
    return studentfcmtokens;
} 