import reportsController from "../controller/reports.controller";
import express from 'express';


const reportsRouter = express.Router();

reportsRouter.post('/', reportsController.createReport);
reportsRouter.get('/', reportsController.getReports);


    


export default reportsRouter;