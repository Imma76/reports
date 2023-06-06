import express from 'express';
import middleware from './middleware/middleware';
import dotenv from 'dotenv'

dotenv.config()


const app = express();

middleware(app)

const PORT:Number = 1300

app.listen(PORT, ()=> {
    console.log(`app is connected on ${PORT}`)
})



