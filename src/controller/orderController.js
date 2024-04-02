import Oder from "../model/order.js";
import Product from "../model/product.js";
import errormessage from "../utiles/errormessage.js";
import sucessmessage from "../utiles/successmessage.js";
class oderController{
     static async orderingProduct(req,res){
        try {
            const{quantity,phoneNumber,email,shippingAddress}=req.body
            const proid=req.params.id
            req.body.user=req.user._id
            const product= await Product.findById(proid)
            if(!product){
                return errormessage(res,401,`product not found`)
            }
            else{
                if(product.quantityAvailable < quantity){
                    return errormessage(res,401,`we haven't enough product`)
                }
                else{
                    const totalPrice=product.productPrice * quantity
                    const productname=product.productName
                    const productprice=product.productPrice
                    const order = new Oder({
                        productname,
                        productprice,
                        quantity,
                        totalPrice,
                        phoneNumber,
                        email,
                        shippingAddress
                    });
                    product.quantityAvailable -= quantity;
                    product.orderingHistory.push({
                        quantity,
                        totalPrice,
                        orderingTime:Date.now()
                    })
                    await product.save();
                    await order.save();
                    res.status(201).json({ message: 'Order placed successfully', order });
                }
            }
            // if(proid.length !==24 || proid.length <24){
            //     return errormessage(res,401,`Invalid ID`)
            // }else{
            //     const pro=await Product.findById(proid)
            //     if(quantity > pro.quantityAvailable){
            //         console.log("you don't have enough storage")
            //     }else{
            //         const order=quantity - pro.quantityAvailable
            //         const totalPrice=pro.productPrice * order
            //         pro.orderingHistory.push({
            //             quantity,
            //             totalPrice,
            //             orderingTime:Date.now()
            //         })
            //         await pro.save()
            //         const ordering=new Oder({
            //             quantity,
            //             totalPrice,
            //         })
            //          await Product.save();
            //         await ordering.save();
            //         res.status(201).json({ message: 'Order placed successfully', ordering });
            //     }
                
            // }
        } catch (error) {
            
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

