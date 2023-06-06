"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("../config/db.config"));
const middleware = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    (0, db_config_1.default)();
};
exports.default = middleware;
