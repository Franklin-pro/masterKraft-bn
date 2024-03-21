
import express from "express"
import videocontrollers from "../controller/videoController"
import VerifyAccess from "../middlewares/velifyaccess"
import DtataChequer from "../middlewares/datachecker"

const router = express.Router()
router.post("/post",DtataChequer.videoPostIsEmpty,VerifyAccess("admin"),videocontrollers.uploadpostvideo)
export default router