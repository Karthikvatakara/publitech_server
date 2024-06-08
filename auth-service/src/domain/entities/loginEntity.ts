import { ObjectId } from "mongoose"

export interface loginEntity {
    _id?: ObjectId,
    email: string,
    password: string
}