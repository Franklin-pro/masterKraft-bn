// routes/videoRoutes.js
import express from "express";
import videocontrollers from "../controller/videoController.js";
import VerifyAccess from "../middlewares/velifyaccess.js";
import DtataChequer from "../middlewares/datachecker.js";
import multer from "multer";
import upload from "../validation/upload.js";
import cloudinaryService from '../utiles/cloud.js'; 

const router = express.Router();

const uploadMiddleware = multer({ dest: 'uploads/' });

router.post("/post", uploadMiddleware.single("video"), async (req, res, next) => {
    try {
        const cloudinaryResult = await cloudinaryService.upload(req);
        const videoUrl = cloudinaryResult.secure_url;
        await videocontrollers.uploadpostvideo(videoUrl); 
        res.status(200).json({ message: "Video uploaded successfully", data: videoUrl });
    } catch (error) {
        next(error);
    }
}, DtataChequer.videoPostIsEmpty);

router.get("/get", videocontrollers.getvideo);
router.get("/get/:id", videocontrollers.getonevideo);
router.delete("/delete", videocontrollers.deletevideo);
router.delete("/delete/:id", videocontrollers.deleteonevideo);

export default router;
