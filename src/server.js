import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"


dotenv.config()

const Master = express()
Master.use(bodyParser.json())
Master.use(cors())

const port = process.env.PORT

Master.listen(port,()=>{
    console.log(`successfuly port runing on ${port}`)
})