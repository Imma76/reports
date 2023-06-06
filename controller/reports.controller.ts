import reportService from '../services/report.services';
import express from 'express';


class ReportsController{


    async createReport(req:express.Request, res:express.Response) {
        const data = {
            status: req.body.status,
            issue: req.body.issue,
            room: req.body.room,
            
        }
       const create =  await reportService.createReport(data);
        return res.status(201).json({status:true, message:'report created successfully'})
    }
}


export default new ReportsController();