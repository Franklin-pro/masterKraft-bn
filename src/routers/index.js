import express from "express"
import userRouter from "./userRouter"
import contactRouter from "./contactRouter"
import videoRouter from "./videoRouter"
import didyouRouter from "./didyouRouter"
import productRouter from "./productRouter"


const router=express.Router()
router.use("/user",userRouter)
router.use("/contact",contactRouter)
router.use("/video",videoRouter)
router.use("/didyou",didyouRouter)
router.use("/product",productRouter)

export default router