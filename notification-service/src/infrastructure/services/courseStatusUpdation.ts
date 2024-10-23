import { CourseEntity } from "../../domain/entities";
import { notifyStudents } from "./notifyStudents";
import { notifyInstructor } from "./notifyInstructor";

export const courseStatusUpdation = async (data: CourseEntity) => {
    const icon = "https://cdn.vectorstock.com/i/500p/43/98/student-education-logo-vector-14724398.jpg"
    try {
        if (data.stage === 'accepted') {
            console.log("accepted");
            await notifyStudents("New course added", data?.title,icon);
        } else if (data.stage === 'rejected') {
            console.log("in the rejected stage in th courseupdation status")
            await notifyInstructor(" Your course rejected ",data?.title,icon,(data?.instructorRef).toString())
        }
     
    } catch (error) {
        throw new Error((error as Error)?.message);
    }
};