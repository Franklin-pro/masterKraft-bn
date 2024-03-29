
import express from "express"
import teamController from "../controller/teamcontroller"


const router = express.Router()

router.post("/post",teamController.postdipertom)

export default router