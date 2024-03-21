
import express from "express"
import videocontrollers from "../controller/videoController"

const router = express.Router()
router.post("/post",videocontrollers.uploadpostvideo)
export default router