
import express from "express"
import videocontrollers from "../controller/videoController"
import VerifyAccess from "../middlewares/velifyaccess"
import DtataChequer from "../middlewares/datachecker"
import multer from "multer"
import upload from "../validation/upload"

const router = express.Router()
router.post("/post", upload.single("video"), DtataChequer.videoPostIsEmpty, videocontrollers.uploadpostvideo);
router.get("/get",videocontrollers.getvideo)
router.get("/get/:id",videocontrollers.getonevideo)
router.delete("/delete",videocontrollers.deletevideo)
router.delete("/delete/:id",videocontrollers.deleteonevideo)
export default router