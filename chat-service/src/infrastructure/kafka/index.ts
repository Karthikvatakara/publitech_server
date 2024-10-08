import { Kafka,Producer,Consumer } from "kafkajs";

// const kafka = new Kafka({
//     clientId: "chat-service",
//     brokers: ["localhost:29092"]
// })

// production
const kafka = new Kafka({
    clientId: "chat-service",
    brokers: ["kafka:9092"]  
});

export const producer:Producer = kafka.producer()
export const consumer:Consumer = kafka.consumer({groupId:"chat-service-kafka-group"})