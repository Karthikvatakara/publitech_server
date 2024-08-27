"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumer = exports.producer = void 0;
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'course-service',
    brokers: ['localhost:29092']
});
exports.producer = kafka.producer();
exports.consumer = kafka.consumer({ groupId: 'course-service-kafka-group' });