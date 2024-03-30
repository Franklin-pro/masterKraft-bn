import User from "../model/user.js";
import Oder from "../model/order.js";
import Product from "../model/product.js";
import errormessage from "../utiles/errormessage";
import sucessmessage from "../utiles/successmessage.js";
class oderController{
     static async orderingProduct(req,res){
        const { productId,userId, quantity } = req.body;
        const product = await Product.findById(productId)
        if(!product){
            return errormessage(res,401,`product not found`)
        }
        else{
            const user=await User.findById(userId)
            if(!customer){
                return errormessage(res,401,`please first enter your address`)
            }
            else if(quantity > product.quantityAvailable){
                return errormessage(res,401,`Insufishient product in the stock`)
            } else{
                const totalPrice = product.price * quantity;
                product.quantityAvailable -= quantity;
                 await product.save();
                 const order = new Oder({ productId, quantity, totalPrice });
                 await order.save();
                 return sucessmessage(res,201,`successfuly odering product`,order)
            }
        }
    }
    static async deleteOder(req,res){
        const order=await Oder.deleteMany()
        if(!order){
            return errormessage(res,401,`no oder found`)
        }else{
            return sucessmessage(res,201,`success all oder deleted`)
        }
    }
    static async getoder(req,res){
        const order=await Oder.find()
        if(!order){
            return errormessage(res,401,`no oder found`)
        }else{
            return sucessmessage(res,201,`success all ${order.length} oder retrived`,order)
        }
    }
    static async getOneOder(req,res){
        const id=req.params.id
        const order=await Oder.findById(id)
        if(!order){
            return errormessage(res,401,`no oder found`)
        }else{
            return sucessmessage(res,201,`oder on this id ${id} retrived`,order)
        }
    }
    static async deleteOne(req,res){
        const id=req.params.id
        const order=await Oder.findByIdAndDelete(id)
        if(!order){
            return errormessage(res,401,`no oder found`)
        }else{
            return sucessmessage(res,201,`success  oder on this id :${id} deleted`)
        }
    }
}
export default oderController

