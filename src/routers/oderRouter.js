import express from "express";
import oderController from "../controller/orderController.js";
import VerifyAccess from "../middlewares/velifyaccess.js";
const router=express.Router()
router.post("/",VerifyAccess("user"),oderController.orderingProduct)
router.delete("/",oderController.deleteOne)
router.get("/",oderController.getoder)
router.get("/:id",oderController.getOneOder)
router.delete("/:id",oderController.deleteOne)
export default router






