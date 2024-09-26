"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const errrorHandler_1 = __importDefault(require("../_lib/common/error/errrorHandler"));
const dependencies_1 = require("../_boot/dependencies");
const routes_1 = require("../infrastructure/routes");
console.log(process.env.PORT);
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4002;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const allowedOrigins = "http://localhost:5173";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
app.use("/", (0, routes_1.routes)(dependencies_1.dependecies));
app.use("*", (req, res) => {
    res.status(404).json({ success: false, status: 404, message: "api not found" });
});
app.use(errrorHandler_1.default);
app.listen(PORT, () => {
    console.log(`user-service connected to port ${PORT}`);
});
exports.default = app;
