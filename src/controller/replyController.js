import replyemail from "../utiles/replyemail.js";
import successmessage from '../utiles/successmessage.js';
import errormessage from '../utiles/errormessage.js';

class ReplyEmail {
    static async sendReply(req, res) {
        try {
            const { userinfo } = req.body;
            await replyemail(userinfo);
            res.status(200).send("Email sent successfully");
        } catch (error) {
            console.error("Error sending reply email:", error);
            res.status(500).send("Internal server error");
        }
    }
}

export default ReplyEmail;
