import { CourseEntity } from "../../domain/entities";
import { notifyStudents } from "./notifyStudents";

export const courseStatusUpdation = async (data: CourseEntity) => {
    try {
        if (data.stage === 'accepted') {
            console.log("accepted");
        } else if (data.stage === 'rejected') {
            console.log("rejected", data);            
            await notifyStudents("New course added", data?.title);
        }
     
    } catch (error) {
        throw new Error((error as Error)?.message);
    }
};