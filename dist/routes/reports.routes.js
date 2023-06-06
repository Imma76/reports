"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reports_controller_1 = __importDefault(require("../controller/reports.controller"));
const express_1 = __importDefault(require("express"));
const reportsRouter = express_1.default.Router();
reportsRouter.post('/', reports_controller_1.default.createReport);
exports.default = reportsRouter;
