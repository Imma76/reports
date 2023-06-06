import mongoose from 'mongoose';


const reportSchema = new mongoose.Schema({
    status:{
        type: String,
        required:true,
        enum:{
            values:['resolved', 'unresolved', 'pending'],
            message:`status must be one of these, resolved, pending, unresolved `
        }
        
    },
    category:{
        type: String,
        
    },
    issue: {
        type:String,
    },
    room:{
        type:String,
    },


},{ timestamps: true })


const reportModel = mongoose.model('Reports', reportSchema);



export default reportModel;