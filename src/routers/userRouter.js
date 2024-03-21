import express from "express"
import userController from "../controller/usercontroller"
import DtataChequer from "../middlewares/datachecker"
import validator from "../middlewares/validation"



const router=express.Router()
router.post("/signup",DtataChequer.userRegisterIsEmpty,DtataChequer.emailExist,
validator.userAccountRule(),validator.inputvalidator,userController.signup)


router.post("/login",userController.Login)
router.get("/get",userController.getuser)
router.get("/get/:id",userController.getoneuser)
router.delete("/delete",userController.deleteuser)
router.delete("/delete/:id",userController.deleteoneuser)
router.patch("/update/:id",userController.updateoneuser)

export default router