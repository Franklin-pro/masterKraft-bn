
import express from "express"
import videocontrollers from "../controller/videoController"
import VerifyAccess from "../middlewares/velifyaccess"
import DtataChequer from "../middlewares/datachecker"
import multer from "multer"

const router = express.Router()
router.post("/post",multer().single("video"),DtataChequer.videoPostIsEmpty,videocontrollers.uploadpostvideo)

router.get("/get",videocontrollers.getvideo)
router.get("/get/:id",videocontrollers.getonevideo)
router.delete("/delete",videocontrollers.deletevideo)
router.delete("/delete/:id",videocontrollers.deleteonevideo)
export default router