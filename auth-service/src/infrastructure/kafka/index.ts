import { Kafka,Producer,Consumer } from "kafkajs";

// devolopement
// const kafka = new Kafka({
//     clientId: "auth-service",
//     brokers: ["localhost:29092"]
// })

// production
const kafka = new Kafka({
    clientId: "auth-service",
    brokers: ["zookeeper:9092"]  
});

export const producer:Producer = kafka.producer()
export const consumer:Consumer = kafka.consumer({groupId:"auth-service-kafka-group"})