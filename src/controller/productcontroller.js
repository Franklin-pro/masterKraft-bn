
import Product from "../model/product"
import errormessage from "../utiles/errormessage"
import sucessmessage from "../utiles/successmessage"

class productController{
    static async postoroduct(req,res){
        const {productName,quantityAvailable,serialNumber,productPrice}=req.body
        const productImage=req.file.path
         try {
            const product = await Product.create({productImage,productName,quantityAvailable,serialNumber,productPrice})
             if(!product){
                return errormessage(res,401,"product not created")
             }else{
                return sucessmessage(res,201,"product successfuly posted",product)
             }
         } catch (error) {
            return errormessage(res,500,`error is ${error}`)
         }
    }

    static async getproduct(req,res){
        try {
            const product = await Product.find()
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,"successfuly product retrived",product)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteproduct(req,res){
        try {
            const product = await Product.deleteMany()
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,"successfuly product deleted")
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async getoneproduct(req,res){
        const id=req.params.id
        try {
            const product = await Product.findById(id)
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,`successfuly product on this id ${id} retrived`,product)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

    static async deleteoneproduct(req,res){
        const id=req.params.id
        try {
            const product = await Product.findByIdAndDelete(id)
            if(!product){
                return errormessage(res,401,'no product found')
            }else{
                return sucessmessage(res,201,`successfuly product on this id ${id} deleted`)
            }
        } catch (error) {
            return errormessage(res,500,`error is ${error}`)
        }
    }

}
export default productController