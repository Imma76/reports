import reportModel from '../model/reports.model'

class ReportServices{


    async createReport(report:Object) {
        const create = reportModel.create(report);
        return create;
    }


}


export default new ReportServices()