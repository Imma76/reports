import reportsController from "../controller/reports.controller";
import express from 'express';


const reportsRouter = express.Router();

reportsRouter.post('/', reportsController.createReport);


    


export default reportsRouter;