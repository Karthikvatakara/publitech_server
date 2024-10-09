"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const dependencies_1 = require("../_boot/dependencies");
const courseRoutes_1 = require("../infrastructure/routes/courseRoutes");
const errorHandler_1 = __importDefault(require("../_lib/common/error/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4004;
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
app.use((0, express_mongo_sanitize_1.default)());
app.use("/api/course", (0, courseRoutes_1.courseRoutes)(dependencies_1.dependencies));
// app.use('/',courseRoutes(dependencies));
app.get("/", (req, res) => {
    console.log("reached home page successfully");
    res.send("home page reached");
});
app.use("*", (req, res) => {
    res.status(404).json({ success: false, status: 404, message: "Api not found" });
});
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`connected to post ${PORT}`);
});
exports.default = app;
