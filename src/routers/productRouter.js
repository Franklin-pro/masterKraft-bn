 import express from "express"
import productController from "../controller/productcontroller.js"
import upload from "../validation/uploadProduct.js"


 const router = express.Router()
 router.post("/post", upload.single('productImage'), productController.postProduct)
  router.get("/get",productController.getproduct)
  router.get("/get/:id",productController.getoneproduct)
  router.delete("/delete",productController.deleteproduct)
  router.delete("/delete/:id",productController.deleteoneproduct)
 export default router