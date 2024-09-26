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
const repositories_1 = require("../../database/mongoDb/repositories");
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, repositories_1.createUser)(data);
        console.log("data reached in usercreated consumer1111111111111111111", newUser);
    }
    catch (error) {
        console.error("the errorr is", error === null || error === void 0 ? void 0 : error.message);
    }
});
