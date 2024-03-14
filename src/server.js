import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routers"


dotenv.config()

const Master = express()
Master.use(bodyParser.json())
Master.use(cors())
Master.use("/API",router)

const port = process.env.PORT
const db=process.env.DATABASE

Master.listen(port,()=>{
    console.log(`successfuly port runing on ${port}`)
})
mongoose.connect(db).then(()=>{
    console.log("Database successfuly connected...")
})
.catch((error)=>{
    console.log(error)
})