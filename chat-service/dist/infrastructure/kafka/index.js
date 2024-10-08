"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.producer = void 0;
const kafkajs_1 = require("kafkajs");
// const kafka = new Kafka({
//     clientId: "chat-service",
//     brokers: ["localhost:29092"]
// })
// production
const kafka = new kafkajs_1.Kafka({
    clientId: "chat-service",
    brokers: ["kafka:9092"]
});
exports.producer = kafka.producer();
exports.consumer = kafka.consumer({ groupId: "chat-service-kafka-group" });
