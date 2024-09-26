import { NextFunction, Request, Response } from "express";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { PaymentEntity } from "../../domain/entities/paymentEntity";
import paymentSuccessProducer from "../../infrastructure/kafka/producer/paymentSuccessProducer";
import createChatProducer from "../../infrastructure/kafka/producer/createChatProducer";
import updateChatSubscription from "../../infrastructure/kafka/producer/updateChatSubscription";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const stripeWebhookHandler = (dependencies: IDepencencies) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const sig = req.headers['stripe-signature'];

        let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        } catch (error) {
            console.log(`⚠️  Webhook signature verification failed.`, (error as Error)?.message);
            return res.status(400).json({success: false, message: "Webhook signature verification failed"});
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                console.log("🚀 ~ return ~ session:", session.metadata,"aaaaaaaaaaaaaa");
                
                if (session.metadata.courseId) {
                    console.log("courseid present 999999999999999999999999999999999999")
                    await handleCourseCheckoutSession(session, dependencies);
                } else if (session.metadata.chatId) {
                    console.log("111111111111")
                    await handleSubscriptionCheckoutSession(session, dependencies);
                } else {
                    console.log("Unknown checkout session type");
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a 200 response to acknowledge receipt of the event
        res.status(200).json({success: true, message: "Webhook received successfully"});
    };
};

const handleCourseCheckoutSession = async (session: any, dependencies: IDepencencies) => {
    const { useCases: { savePaymentUseCase, saveChatUseCase } } = dependencies;
    const { courseId, userId, instructorRef } = session.metadata;
    const amount = session.amount_total / 100;
    const method = session.payment_method_types[0];
    const status = session.payment_status === "paid" ? "completed" : "failed";

    try {
        const data: PaymentEntity = {
            userId,
            courseId,
            instructorRef,
            method,
            status,
            amount
        };
        console.log("🚀 ~ handleCourseCheckoutSession ~ data:", data);
        
        const response = await savePaymentUseCase(dependencies).execute(data);
        
        const enrollmentData = {
            userId,
            courseId,
        };
        console.log("🚀 ~ handleCourseCheckoutSession ~ enrollmentData:", enrollmentData);
        
        const chatData = {
            userId,
            instructorRef
        };
        
        await paymentSuccessProducer(enrollmentData, "course-service-topic");
        await createChatProducer(chatData, "chat-service-topic");
        const chatResponse = await saveChatUseCase(dependencies).execute(chatData);
        
        console.log("Course payment processed successfully", response);
    } catch (error) {
        console.error("Error processing course payment", error);
        throw new Error((error as Error)?.message);
    }
};

const handleSubscriptionCheckoutSession = async (session: any, dependencies: IDepencencies) => {
    const { useCases: { subscriptionPaymentUseCase } } = dependencies;
    const { chatId, userId, planName } = session.metadata;
    const amount = session.amount_total / 100;
    const method = session.payment_method_types[0];
    const subscriptionType:  "basic" |"standard" | "premium" = planName;
    const status: "pending" | "completed" | "failed" | "refunded" = session.payment_status === "paid" ? "completed" : "failed";

    try {
        const subscriptionData = {
            userId,
            chatId,
            method,
            status,
            amount,
            subscriptionType
        };
        console.log("🚀 ~ handleSubscriptionCheckoutSession ~ subscriptionData:", subscriptionData)

        const response = await subscriptionPaymentUseCase(dependencies).execute(subscriptionData);
        
        // Update the chat or user status
        const chatUpdateData: {userId: string,chatId: string, subscriptionType: "none"| "basic" | "standard" | "premium"}= {
            userId,
            chatId,
            subscriptionType
        };
        console.log("🚀 ~ handleSubscriptionCheckoutSession ~ chatUpdateData:", chatUpdateData)

        // await updateChatSubscription(chatUpdateData, "chat-service-topic");

        try {
            await updateChatSubscription(chatUpdateData, "chat-service-topic");
            console.log("updateChatSubscription message sent successfully");
        } catch (error) {
            console.error("Error sending updateChatSubscription message:", error);
        }

        console.log("Subscription payment processed successfully");
    } catch (error) {
        console.error("Error processing subscription payment", error);
        throw new Error((error as Error)?.message);
    }
};

