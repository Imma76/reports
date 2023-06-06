import express from 'express';
import middleware from './middleware/middleware';
import dotenv from 'dotenv'

dotenv.config()


const app = express();

middleware(app)

const PORT = 1300

app.listen((PORT:Number) => {
    console.log('app is connected')
})



