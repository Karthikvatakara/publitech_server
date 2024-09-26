"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = __importDefault(require("../_lib/common/error/errorHandler"));
const chatRoutes_1 = require("../infrastructure/routes/chatRoutes");
const dependencies_1 = require("../_boot/dependencies");
const connection_1 = __importDefault(require("../infrastructure/socket/connection"));
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 4006;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const allowedOrigins = "http://localhost:5173";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    Credentials: true
};
app.use((0, cors_1.default)(corsOptions));
const server = http_1.default.createServer(app);
(0, connection_1.default)(server);
app.use((0, express_mongo_sanitize_1.default)());
app.use("/", (0, chatRoutes_1.chatRoutes)(dependencies_1.dependencies));
app.use("*", (req, res) => {
    res.status(404).json({ success: false, status: 404, message: "Api not found" });
});
app.use(errorHandler_1.default);
server.listen(port, () => {
    console.log(`connected to the port ${port}`);
});
exports.default = app;
