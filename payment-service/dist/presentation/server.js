"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const cors_1 = __importDefault(require("cors"));
const error_1 = require("../_lib/error");
const paymentRoutes_1 = require("../infrastructure/routes/paymentRoutes");
const dependencies_1 = require("../_boot/dependencies");
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4005;
app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
        next();
    }
    else {
        express_1.default.json()(req, res, next);
    }
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const allowedOrigins = "http://localhost:5173";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, express_mongo_sanitize_1.default)());
app.use("/", (0, paymentRoutes_1.paymentRoutes)(dependencies_1.dependencies));
app.use("*", (req, res) => {
    res.status(404).json({ success: false, status: 404, message: "Api not found" });
});
app.use(error_1.errorHandler);
app.listen(PORT, () => {
    console.log(`connected to payment-service succesfully ${PORT}`);
});
exports.default = app;
