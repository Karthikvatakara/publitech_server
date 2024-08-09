import { UserEntity } from "../../domain/entities/userEntity";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import applyToTeachConsumer from "./consumers/applyToTeachConsumer";
import instructorApprovalConsumer from "./consumers/instructorApprovalConsumer";
import { applyToTeachEntity } from "../../domain/entities/applyToTeachEntity";
import instructorStatusChange from "./consumers/instructorStatusChange";
import editUserProfileConsumer from "./consumers/editUserProfileConsumer";
import paymentSuccessEnrollment from "./consumers/paymentSuccessEnrollment";
import { EnrollmentEntity } from "../../domain/entities";

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>,
    instructorApplied(data:applyToTeachEntity):Promise<void>
    instructorApproval(data:UserEntity): Promise<void>
    instructorStatusChange(userData:UserEntity):any
    editUserProfile(userData:UserEntity):any
    paymentSuccess(data:EnrollmentEntity): Promise<void>
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        instructorApplied:applyToTeachConsumer,
        instructorApproval:instructorApprovalConsumer,
        instructorStatusChange:instructorStatusChange,
        editUserProfile:editUserProfileConsumer,
        paymentSuccess: paymentSuccessEnrollment
    }
}


