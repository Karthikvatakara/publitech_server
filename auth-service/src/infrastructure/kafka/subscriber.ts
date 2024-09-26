import sendVerificationMailConsumer from "./consumers/sendVerificationMailConsumer";
import instructorApprovalConsumer from "./consumers/instructorApprovalConsumer";
import instructorStatusChangeConsumer from "./consumers/instructorStatusChangeConsumer";
import editUserProfileConsumer from "./consumers/editUserProfileConsumer";
import { UserEntity } from "../../domain/entities/userEntity";

export interface INotificationSubscriber {
    sendVerificationMail(userData:any):any;
    instructorApproval(userData:UserEntity):any
    instructorStatusChange(userData:UserEntity):any
    editUserProfile(userData:UserEntity):any
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        sendVerificationMail:sendVerificationMailConsumer,
        instructorApproval:instructorApprovalConsumer,
        instructorStatusChange:instructorStatusChangeConsumer,
        editUserProfile:editUserProfileConsumer
    }
}