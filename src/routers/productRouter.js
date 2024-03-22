 import express from "express"
import productController from "../controller/productcontroller"

 const router = express.Router()
  router.post("/post",productController.postoroduct)
  router.get("/get",productController.getproduct)
  router.get("/get/:id",productController.getoneproduct)
  router.delete("/delete",productController.deleteproduct)
  router.delete("/delete/:id",productController.deleteoneproduct)
 export default router