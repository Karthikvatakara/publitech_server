import { Kafka,Producer,Consumer } from "kafkajs";

// export const kafka = new Kafka({
//     clientId: "user-service",
//     brokers:["localhost:29092"]
// })

// production
const kafka = new Kafka({
    clientId: "user-service",
    brokers: ["kafka:9092"]  
});

export const producer:Producer = kafka.producer();
export const consumer:Consumer = kafka.consumer({groupId:"user-service kafka group"});