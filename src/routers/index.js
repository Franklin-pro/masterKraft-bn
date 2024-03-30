import express from "express"
import userRouter from "./userRouter.js"
import contactRouter from "./contactRouter.js"
import videoRouter from "./videoRouter.js"
import didyouRouter from "./didyouRouter.js"
import productRouter from "./productRouter.js"
import oder from './oderRouter.js'


const router=express.Router()
router.use("/user",userRouter)
router.use("/contact",contactRouter)
router.use("/video",videoRouter)
router.use("/didyou",didyouRouter)
router.use("/product",productRouter)
router.use("/order",oder)

export default router