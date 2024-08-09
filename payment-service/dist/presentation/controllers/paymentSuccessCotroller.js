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
exports.paymentSuccessController = void 0;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paymentSuccessController = (dependencies) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { session_id } = req.query;
        try {
            const session = yield stripe.checkout.sessions.retrieve(session_id);
            res.status(200).json({ success: true, data: session, message: "payment completed succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.paymentSuccessController = paymentSuccessController;
