import express from 'express';
import Reply from '../model/reply.js';
import Contact from '../model/contact.js';


class ReplyController{
    static async reply(req,res){
        try {
            const{replyMessage}=req.body
            const contID=req.params.id
            const contact=await Contact.findById(contID)
            if(!contact){
                console.log("not found")
            }
            else{
                console.log(contact)
            }
        } catch (error) {
            
        }
    }
}

export default ReplyController