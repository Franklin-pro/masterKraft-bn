import express from "express"
import userController from "../controller/usercontroller"



const router=express.Router()
router.post("/signup",userController.signup)
router.post("/login",userController.Login)
router.get("/get",userController.getuser)
router.get("/get/:id",userController.getoneuser)
router.delete("/delete",userController.deleteuser)
router.delete("/delete/:id",userController.deleteoneuser)
router.patch("/update/:id",userController.updateoneuser)

export default router