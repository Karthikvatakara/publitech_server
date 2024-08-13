import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export const toggleStudentBlockStatus = async( userId: string ):Promise<UserEntity | null> => {
    try{
        const student = await User.findById(userId);

        if( !student ){
            throw new Error("user is not found")
        }

        student.isBlocked = !student.isBlocked;
        await student.save();

        return student;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}