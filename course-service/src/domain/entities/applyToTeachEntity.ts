import { ObjectId } from "mongoose";

export interface applyToTeachEntity {
    _id: ObjectId,
    email: string,
    profession: string,
    profileDescription: string,
    linkedIn: string,
    github: string,
    mobile: string
}