
import express from "express"
import didyouController from "../controller/didyoucontriller"


const router = express.Router()

router.post("/post",didyouController.sendDidyou)
export default router