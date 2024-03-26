
import express from "express"
import didyouController from "../controller/didyoucontriller.js"


const router = express.Router()

router.post("/post",didyouController.sendDidyou)
router.get("/get",didyouController.getdidyou)
router.delete("/delete/:id",didyouController.deleteonedidyou)
export default router