import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const Master = express();
Master.use(bodyParser.json());
Master.use(cors());

const port = process.env.PORT 

const db = process.env.DATABASE;

// Configure our server
Master.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database successfully connected');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

export default Master;
