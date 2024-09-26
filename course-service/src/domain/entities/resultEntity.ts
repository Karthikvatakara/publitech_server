import { Types } from "mongoose";

export interface resultEntity {
    _id: Types.ObjectId,
    assessmentRef: Types.ObjectId,
    userRef: Types.ObjectId,
    score: number,
    isPassed: boolean,
    createdAt?: Date,
    updatedAt?: Date
}