import mongoose from "mongoose";
const oderSchemas = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    oderAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
oderSchemas.pre(/^find/,function(next){
    this.populate({
        path:"productId",
        select:"productname price"
    }).populate({
        path:"userId",
        select:"email",
})
    next()
})
const Oder=mongoose.model("Oder",oderSchemas)
export default Oder