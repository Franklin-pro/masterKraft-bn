import mongoose from "mongoose";

const replySchema=new mongoose.Schema({
    replyMessage:{
        type:String,
        required:true
    }
})
const Reply=mongoose.model("Reply",replySchema)
export default Reply