import { Schema, model } from "mongoose";
import { CategoryEntity } from "../../../../domain/entities";

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String
    }
},{
    timestamps: true
});

export const category = model<CategoryEntity>("categories",categorySchema)