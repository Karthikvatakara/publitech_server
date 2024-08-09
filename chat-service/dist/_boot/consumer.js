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
exports.runConsumer = void 0;
const kafka_1 = require("../infrastructure/kafka");
const subscriber_1 = require("../infrastructure/kafka/subscriber");
const runConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield kafka_1.consumer.connect();
        yield kafka_1.consumer.subscribe({
            topic: "chat-service-topic",
            fromBeginning: true
        });
        const subscriber = (0, subscriber_1.createSubscriber)();
        yield kafka_1.consumer.run({
            eachMessage: (_a) => __awaiter(void 0, [_a], void 0, function* ({ message }) {
                const { key, value } = message;
                if (!key) {
                    console.error("kafka message key is missing");
                    throw new Error(" kafka key is missing");
                }
                if (!value) {
                    console.error("kafka message value is missing");
                    throw new Error(" kafka value is missing");
                }
                const subscriberMethod = String(key);
                const subscriberData = JSON.parse(String(value));
                try {
                    yield subscriber[subscriberMethod](subscriberData);
                }
                catch (error) {
                    console.error(`error with the message key ${key}`, error === null || error === void 0 ? void 0 : error.message);
                    throw new Error("error in kafka consumer");
                }
            })
        });
    }
    catch (error) {
        console.error("kafka consumer error in  the auth-service", error === null || error === void 0 ? void 0 : error.message);
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.runConsumer = runConsumer;
