import { Kafka, Producer, Consumer } from 'kafkajs';

// const kafka = new Kafka({
//     clientId: "payment-service",
//     brokers: [ "localhost:29092" ]
// })


// production
const kafka = new Kafka({
    clientId: "payment-service",
    brokers: ["kafka:9092"]  
});

export const producer:Producer = kafka.producer();
export const consumer:Consumer = kafka.consumer({groupId:"payment-service-kafka-group"})