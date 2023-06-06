"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reportSchema = new mongoose_1.default.Schema({
    status: {
        type: String,
        required: true,
        enum: {
            values: ['resolved', 'unresolved', 'pending'],
            message: `status must be one of these, resolved, pending, unresolved `
        }
    },
    category: {
        type: String,
    },
    issue: {
        type: String,
    },
    room: {
        type: String,
    },
}, { timestamps: true });
const reportModel = mongoose_1.default.model('Reports', reportSchema);
exports.default = reportModel;
