import { ObjectId, Types } from "mongoose";

interface Lesson {
    title: string,
    description: string,
    thumbnail: string,
    video: string,
    attachments?: {
        title: string;
        url: string
    }
}

interface Trial {
    title: string,
    description: string,
    thumbnail: string,
    video: string
}

enum PriceType {
    free = 'free',
    paid = 'paid'
}

interface Pricing {
    amount: number,
    type: PriceType
}

enum stageType {
    requested = "requested",
    rejected = "rejected",
    accepted = "accepted"
}
export interface CourseEntity {
    _id: Types.ObjectId,
    title: string,
    description: string,
    thumbnail: string,
    instructorRef: ObjectId,
    categoryRef: ObjectId,
    language?: string,
    lessons: [Lesson],
    trial: Trial,
    createdAt?: Date;
    updatedAt?: Date;
    pricing: Pricing;
    whatWillLearn: [string]
    isBlocked?: boolean | string;
    stage: stageType;
    isPublished?: boolean | string;
    rejectReason?: String
}