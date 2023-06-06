import reportService from '../services/report.services';
import express from 'express';
import _ from 'lodash'

class ReportsController{


    async createReport(req:express.Request, res:express.Response) {
        const data = {
            status: req.body.status,
            issue: req.body.issue,
            room: req.body.room,
            category:req.body.category
        }
        const create = await reportService.createReport(data);
        return res.status(201).json({status:true, message:'report created successfully'})
    }

    async getReports(req:express.Request, res:express.Response) {
        const reports = await reportService.getAllReports();
        if(_.isEmpty(reports)){
            return res.status(200).json({ status: true, message:'reports not found, create a report'});
        }
        return res.status(200).json({status:true, data:reports})
    }


}


export default new ReportsController();