import { dependencies } from "../../_boot/dependencies";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { createCheckOutSessionController } from "./createCheckOutSessionController";
import { stripeWebhookHandler } from "./webHookHandler";
import { paymentSuccessController } from "./paymentSuccessCotroller";
import { createSubscriptionCheckoutSessionController } from "./createSubscriptionCheckOutSession";
import { getAllCoursePaymentsController } from "./getAllCoursePaymentsController";
import { getAllSubscriptionPaymentController } from "./getAllSubscriptionPayment";

export const controllers = (dependencies:IDepencencies ) => {
    return {
        createCheckOutSession: createCheckOutSessionController(dependencies),
        stripeWebhook: stripeWebhookHandler(dependencies),
        paymentSuccess: paymentSuccessController(dependencies),
        createSubscriptionCheckout: createSubscriptionCheckoutSessionController(dependencies),
        getAllCoursePayments: getAllCoursePaymentsController(dependencies),
        getAllSubscriptionPayments: getAllSubscriptionPaymentController(dependencies)
    }
}