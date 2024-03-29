
import mongoose from "mongoose";


const testmonschemas = new mongoose.Schema({
    Name:{type:String,required:true},
    Image:{type:String,required:true},
    Description:{type:String,required:true},
    Role:{type:String,required:true},
    postAt:{type:Date,default:new Date(Date.now())}
})
const Testmon = mongoose.model("Testmon",testmonschemas)
export default Testmon