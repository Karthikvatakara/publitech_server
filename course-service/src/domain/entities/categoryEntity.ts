import { Types } from "mongoose";

export interface CategoryEntity {
    findOne(arg0: { _id: import("bson").ObjectId; }): unknown;
    findOneAndUpdate(arg0: { _id: Types.ObjectId; }, arg1: { $set: { isBlocked: boolean; }; }, arg2: { new: boolean; }): unknown;
    _id: Types.ObjectId,
    title: string,
    isBlocked: boolean,
    imageUrl: string
}