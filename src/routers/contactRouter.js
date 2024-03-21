
import contactController from "../controller/contactcontroller";
import express from "express"
import DtataChequer from "../middlewares/datachecker";
import validator from "../middlewares/validation";


const router = express.Router()
router.post("/post",DtataChequer.userRegisterIsEmpty,validator.contactAccountRule()
,validator.inputvalidator,contactController.sendmessage)

router.get("/get",contactController.getcontact)
router.delete("/delete",contactController.deletecontact)
router.get("/get/:id",contactController.getOnecontact)
router.delete("/delete/:id",contactController.deleteOnecontact)

export default router