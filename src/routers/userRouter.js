import express from "express"
import userController from "../controller/usercontroller"



const router=express.Router()
router.post("/signup",userController.signup)
router.post("/login",userController.Login)

export default router