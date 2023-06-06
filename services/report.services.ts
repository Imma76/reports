import reportModel from '../model/reports.model'

class ReportServices{


    async createReport(report:Object) {
        const create = await reportModel.create(report);
        return create;
    }

    async getAllReports() {
        const reports = await reportModel.find();
        return reports;
    }


}


export default new ReportServices()