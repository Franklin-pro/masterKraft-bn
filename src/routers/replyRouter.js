import express from 'express'
import replyEmail from "../controller/replyController.js";

const router = express.Router()


router.post("/reply",replyEmail.sendReply)

export default router