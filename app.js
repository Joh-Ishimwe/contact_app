import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express'
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRouter from './routes/contact.routes.js';
import errorHandler from './errorHandler/contactErrorHandler.js';
import swagger from './docs/swagger.json' assert {type: "json"}
//middleware

app.use(express.json());
app.use(cors());


//routes

app.use("/api/contact", contactRouter);


app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swagger));

 app.use(errorHandler.notFound)
 app.use(errorHandler.serverError)

//db connection

mongoose.connect(configuration.mongoURI)
    .then(() => {
        console.log('BD connected!!!');

        app.listen(configuration.port, () => {
            console.log("listening on port " + configuration.port);
        });
    })
    .catch(err => {
        console.log(err);
    });
app.use("/", (res, req) => {
    res.send("server is runnign");
})