
import express from "express"
import videocontrollers from "../controller/videoController.js"
import VerifyAccess from "../middlewares/velifyaccess.js"
import DtataChequer from "../middlewares/datachecker.js"
import multer from "multer"
import upload from "../validation/upload.js"

const router = express.Router()
router.post("/post", upload.single("video"), DtataChequer.videoPostIsEmpty, videocontrollers.uploadpostvideo);
router.get("/get",videocontrollers.getvideo)
router.get("/get/:id",videocontrollers.getonevideo)
router.delete("/delete",videocontrollers.deletevideo)
router.delete("/delete/:id",videocontrollers.deleteonevideo)
export default router