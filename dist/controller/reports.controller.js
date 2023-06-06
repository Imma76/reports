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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const report_services_1 = __importDefault(require("../services/report.services"));
const lodash_1 = __importDefault(require("lodash"));
class ReportsController {
    createReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                status: req.body.status,
                issue: req.body.issue,
                room: req.body.room,
                category: req.body.category
            };
            const create = yield report_services_1.default.createReport(data);
            return res.status(201).json({ status: true, message: 'report created successfully' });
        });
    }
    getReports(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reports = yield report_services_1.default.getAllReports();
            if (lodash_1.default.isEmpty(reports)) {
                return res.status(200).json({ status: true, message: 'reports not found, create a report' });
            }
            return res.status(200).json({ status: true, data: reports });
        });
    }
}
exports.default = new ReportsController();
