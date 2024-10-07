// import { Redis } from "ioredis";

// export const Client = new Redis();

// Client.on("connect",() => {
//     console.log("connected to redis");
    
// })



// production setup
import { Redis, RedisOptions } from "ioredis";

// In production, use the Redis service name and port
// const redisHost = process.env.REDIS_HOST || "redis-stack";
// const redisPort = parseInt(process.env.REDIS_PORT || "6379");
const redisPassword = process.env.REDIS_PASSWORD || "";

const redisConfig: RedisOptions = {
  host: "redis-stack",
  port: 6379,
  password: redisPassword
};

export const Client = new Redis(redisConfig);

Client.on("connect", () => {
  console.log("Connected to Redis");
});
