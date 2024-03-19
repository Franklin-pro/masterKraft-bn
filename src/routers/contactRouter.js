
import contactController from "../controller/contactcontroller";
import express from "express"


const router = express.Router()
router.post("/post",contactController.sendmessage)
router.get("/get",contactController.getcontact)
router.delete("/delete",contactController.deletecontact)
router.get("/get/:id",contactController.getOnecontact)
router.delete("/delete/:id",contactController.deleteOnecontact)

export default router