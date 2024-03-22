
import mongoose from "mongoose";


const  productschemas=new mongoose.Schema({
     productImage:{type:String,required:true},
     productName:{type:String,required:true},
     quantityAvailable:{type:Number,required:true},
     serialNumber:{type:String,required:true},
     productPrice:{type:Number,required:true},
     postAt:{type:Date,default:new Date(Date.now())}

})
const Product=mongoose.model("Product",productschemas)
export default Product