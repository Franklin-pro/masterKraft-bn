
import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({

    fullname:{type:String,required:true},
    email:{type:String,required:true},
    schoolname:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    course:{type:String,required:true},
    message:{type:String,required:true},
    province:{type:String,enum:["East","West","South","Nouth","Kigali city"]},
    sendAt:{
        type:Date,
        default:new Date(Date.now())
    }


})
const Contact =mongoose.model("Contact",contactSchema)
export default Contact