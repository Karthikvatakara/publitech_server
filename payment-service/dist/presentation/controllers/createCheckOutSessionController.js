"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckOutSessionController = void 0;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const createCheckOutSessionController = (dependencies) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const { courseId, userId, amount, thumbnail, courseName, instructorRef } = req.body;
            const line_items = [{
                    price_data: {
                        currency: 'INR',
                        product_data: {
                            name: courseName,
                            images: [thumbnail],
                        },
                        unit_amount: Math.floor(amount * 100)
                    },
                    quantity: 1
                }];
            const session = yield stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `http://localhost:5173/paymentSuccess?session_id={CHECKOUT_SESSION_ID}&amount=${amount}&currency=INR&courseId=${courseId}&userId=${userId}`,
                cancel_url: `http://localhost:5173/paymentFailure`,
                metadata: {
                    courseId,
                    userId,
                    instructorRef
                }
            });
            res.status(200).json({ success: true, id: session.id, message: "message from payment side" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createCheckOutSessionController = createCheckOutSessionController;
