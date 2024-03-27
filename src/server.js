import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/index.js";
import path from 'path';

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/videos', express.static(path.join(new URL('../uploads', import.meta.url).pathname)));
app.use("/API", router);


const port = process.env.PORT;
const dbUri = process.env.DATABASE;
mongoose.connect(dbUri)
    .then(() => {
        console.log("Successfully connected to the database.");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
