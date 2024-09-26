import { ObjectId } from "mongoose";    

export interface chatEntity {
    _id?:   ObjectId,
    isGroupChat : boolean,
    users: [  ObjectId ],
    latestMessage: ObjectId,
    groupName: String,
    groupAdmin: ObjectId,
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subscriptionType?: "none" | "basic" | "standard" | "premium" ;
}