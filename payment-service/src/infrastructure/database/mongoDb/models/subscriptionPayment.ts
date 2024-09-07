import { Schema,model } from "mongoose";
import { subscriptionPaymentEntity } from "../../../../domain/entities/subscriptionPaymentEntity";

const subscriptionPaymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    chatId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"chats"
    },
    method: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [ "pending","completed","failed","refunded"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    subscriptionType: {
        type: String,
        enum:["basic","standard","premium"]
    }
},{
    timestamps: true
})

export const subscriptionPayment = model<subscriptionPaymentEntity>("subscriptionPayment",subscriptionPaymentSchema)