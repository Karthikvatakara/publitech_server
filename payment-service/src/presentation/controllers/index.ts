import { dependencies } from "../../_boot/dependencies";
import { IDepencencies } from "../../application/interfaces/IDependency";
import { createCheckOutSessionController } from "./createCheckOutSessionController";
import { stripeWebhookHandler } from "./webHookHandler";
import { paymentSuccessController } from "./paymentSuccessCotroller";
import { createSubscriptionCheckoutSessionController } from "./createSubscriptionCheckOutSession";

export const controllers = (dependencies:IDepencencies ) => {
    return {
        createCheckOutSession: createCheckOutSessionController(dependencies),
        stripeWebhook: stripeWebhookHandler(dependencies),
        paymentSuccess: paymentSuccessController(dependencies),
        createSubscriptionCheckout: createSubscriptionCheckoutSessionController(dependencies)
    }
}