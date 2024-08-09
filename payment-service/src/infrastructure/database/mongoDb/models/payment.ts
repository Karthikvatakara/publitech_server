import { Schema, model } from "mongoose";
import { PaymentEntity } from "../../../../domain/entities/paymentEntity";

const paymentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    instructorRef:{
      type: Schema.Types.ObjectId,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = model<PaymentEntity>("payments", paymentSchema);
