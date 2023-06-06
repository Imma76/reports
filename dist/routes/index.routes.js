"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reports_routes_1 = __importDefault(require("./reports.routes"));
const indexRouter = express_1.default.Router();
indexRouter.use('/reports', reports_routes_1.default);
exports.default = indexRouter;
