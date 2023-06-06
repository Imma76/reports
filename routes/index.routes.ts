import express from 'express';
import reportsRouter from './reports.routes';


const indexRouter = express.Router();



indexRouter.use('/reports', reportsRouter)

export default indexRouter;