import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import router from "./routers"
// import serveStatic from "serve-static"
import path from 'path'
dotenv.config()

const Master = express()

Master.use(cors())
Master.use('/videos',express.static(path.join(__dirname,'../uploads')))
Master.use(bodyParser.json())
Master.use(bodyParser.urlencoded({
    extended: true
  }));
Master.use("/API", router)

const port = process.env.PORT
const db = process.env.DATABASE

Master.listen(port, () => {
    console.log(`port running on ${port}`)
})

mongoose.connect(db).then(() => {
    console.log("successfully connected to the database...")
}).catch((error) => {
    console.log(error)
})
