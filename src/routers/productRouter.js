 import express from "express"
import productController from "../controller/productcontroller"
import upload from "../validation/upload"

 const router = express.Router()
 router.post("/post", upload.single('productImage'), productController.postoroduct)
  router.get("/get",productController.getproduct)
  router.get("/get/:id",productController.getoneproduct)
  router.delete("/delete",productController.deleteproduct)
  router.delete("/delete/:id",productController.deleteoneproduct)
 export default router