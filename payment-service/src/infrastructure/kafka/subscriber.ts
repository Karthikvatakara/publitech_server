import { UserEntity } from "../../domain/entities/userEntity";
import userCreatedConsumer from "./consumer/userCreatedConsumer";
import editUserProfileConsumer from "./consumer/editUserProfileConsumer";
import updateCourseStatus from "./consumer/updateCourseStatus";
import { CourseEntity } from "../../domain/entities/courseEntity";

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>
    editUserProfile(data: UserEntity) : Promise<void>
    courseStatusUpdated(data: CourseEntity): Promise<void>
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        editUserProfile: editUserProfileConsumer,
        courseStatusUpdated:updateCourseStatus
    }
}


