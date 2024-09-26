"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = void 0;
const userCreatedConsumer_1 = __importDefault(require("./consumers/userCreatedConsumer"));
const coursePurchasedConsumer_1 = __importDefault(require("./consumers/coursePurchasedConsumer"));
const updateChatSubscriptionConsumer_1 = __importDefault(require("./consumers/updateChatSubscriptionConsumer"));
const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer_1.default,
        createChat: coursePurchasedConsumer_1.default,
        updateChatSubscription: updateChatSubscriptionConsumer_1.default
    };
};
exports.createSubscriber = createSubscriber;
