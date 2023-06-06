"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middleware/middleware"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, middleware_1.default)(app);
const PORT = 1300;
app.listen(PORT, () => {
    console.log(`app is connected on ${PORT}`);
});
