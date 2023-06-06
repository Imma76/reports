import mongoose from 'mongoose'

const database = () => {
    mongoose.connect(`${process.env.MONGODB_URI}`).then((val)=>console.log('db connected')).catch((err)=>console.log(err))
}



export default database;