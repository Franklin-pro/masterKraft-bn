import dotenv from "dotenv"
import mongoose from "mongoose"
import  express  from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routers"


dotenv.config()

const Master=express()
Master.use(bodyParser.json())
Master.use("/API",router)
Master.use(cors())

const port=process.env.PORT
const db=process.env.DATABASE

Master.listen(port,()=>{
    console.log(`port running on ${port}`)
})

mongoose.connect(db).then(()=>{
    console.log("successfuly database connected...")
})
.catch((error)=>{
    console.log(error)
})
