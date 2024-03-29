
import express from "express"
import testmonController from "../controller/testmoncontroller"


const router = express.Router()
router.post("/post",testmonController.posttestmon)

export default router