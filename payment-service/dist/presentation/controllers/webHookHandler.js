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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeWebhookHandler = void 0;
const paymentSuccessProducer_1 = __importDefault(require("../../infrastructure/kafka/producer/paymentSuccessProducer"));
const createChatProducer_1 = __importDefault(require("../../infrastructure/kafka/producer/createChatProducer"));
const updateChatSubscription_1 = __importDefault(require("../../infrastructure/kafka/producer/updateChatSubscription"));
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripeWebhookHandler = (dependencies) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Raw body:', req.body);
        console.log('Headers:', req.headers);
        const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
        const sig = req.headers['stripe-signature'];
        let event;
        try {
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        }
        catch (error) {
            console.log(`⚠️  Webhook signature verification failed.`, error === null || error === void 0 ? void 0 : error.message);
            return res.status(400).json({ success: false, message: "Webhook signature verification failed" });
        }
        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                console.log("🚀 ~ return ~ session:", session.metadata, "aaaaaaaaaaaaaa");
                if (session.metadata.courseId) {
                    console.log("courseid present 999999999999999999999999999999999999");
                    yield handleCourseCheckoutSession(session, dependencies);
                }
                else if (session.metadata.chatId) {
                    console.log("111111111111");
                    yield handleSubscriptionCheckoutSession(session, dependencies);
                }
                else {
                    console.log("Unknown checkout session type");
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        // Return a 200 response to acknowledge receipt of the event
        res.status(200).json({ success: true, message: "Webhook received successfully" });
    });
};
exports.stripeWebhookHandler = stripeWebhookHandler;
const handleCourseCheckoutSession = (session, dependencies) => __awaiter(void 0, void 0, void 0, function* () {
    const { useCases: { savePaymentUseCase, saveChatUseCase } } = dependencies;
    const { courseId, userId, instructorRef } = session.metadata;
    const amount = session.amount_total / 100;
    const method = session.payment_method_types[0];
    const status = session.payment_status === "paid" ? "completed" : "failed";
    try {
        const data = {
            userId,
            courseId,
            instructorRef,
            method,
            status,
            amount
        };
        console.log("🚀 ~ handleCourseCheckoutSession ~ data:", data);
        const response = yield savePaymentUseCase(dependencies).execute(data);
        const enrollmentData = {
            userId,
            courseId,
        };
        console.log("🚀 ~ handleCourseCheckoutSession ~ enrollmentData:", enrollmentData);
        const chatData = {
            userId,
            instructorRef
        };
        yield (0, paymentSuccessProducer_1.default)(enrollmentData, "course-service-topic");
        yield (0, createChatProducer_1.default)(chatData, "chat-service-topic");
        const chatResponse = yield saveChatUseCase(dependencies).execute(chatData);
        console.log("Course payment processed successfully", response);
    }
    catch (error) {
        console.error("Error processing course payment", error);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
const handleSubscriptionCheckoutSession = (session, dependencies) => __awaiter(void 0, void 0, void 0, function* () {
    const { useCases: { subscriptionPaymentUseCase } } = dependencies;
    const { chatId, userId, planName } = session.metadata;
    const amount = session.amount_total / 100;
    const method = session.payment_method_types[0];
    const subscriptionType = planName;
    const status = session.payment_status === "paid" ? "completed" : "failed";
    try {
        const subscriptionData = {
            userId,
            chatId,
            method,
            status,
            amount,
            subscriptionType
        };
        console.log("🚀 ~ handleSubscriptionCheckoutSession ~ subscriptionData:", subscriptionData);
        const response = yield subscriptionPaymentUseCase(dependencies).execute(subscriptionData);
        // Update the chat or user status
        const chatUpdateData = {
            userId,
            chatId,
            subscriptionType
        };
        console.log("🚀 ~ handleSubscriptionCheckoutSession ~ chatUpdateData:", chatUpdateData);
        // await updateChatSubscription(chatUpdateData, "chat-service-topic");
        try {
            yield (0, updateChatSubscription_1.default)(chatUpdateData, "chat-service-topic");
            console.log("updateChatSubscription message sent successfully");
        }
        catch (error) {
            console.error("Error sending updateChatSubscription message:", error);
        }
        console.log("Subscription payment processed successfully");
    }
    catch (error) {
        console.error("Error processing subscription payment", error);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
