import express from 'express';
import database from '../config/db.config';
import indexRouter from '../routes/index.routes';


const middleware = (app:express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
    database();
    app.use(indexRouter)

}


export default middleware;


