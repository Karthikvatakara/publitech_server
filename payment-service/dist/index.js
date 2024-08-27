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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./presentation/server"));
const config_1 = __importDefault(require("./_boot/config"));
const consumer_1 = require("./_boot/consumer");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server_1.default;
        yield (0, config_1.default)();
        yield (0, consumer_1.runConsumer)();
    }
    catch (error) {
        console.error(error === null || error === void 0 ? void 0 : error.message);
        process.exit(1);
    }
}))();