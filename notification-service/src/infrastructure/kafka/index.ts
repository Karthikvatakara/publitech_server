import { Kafka,Producer,Consumer } from "kafkajs"

// export const kafka = new Kafka({
//     clientId:'notification-service',
//     brokers: ["localhost:29092"]
// })

// production
export const kafka = new Kafka({
    clientId: "notification-service",
    brokers: ["kafka:9092"]  
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({groupId:"notification-service-kafka-group"})