import replyemail from "../utiles/replyemail.js";
import sucessmessage from '../utiles/successmessage.js'; // Corrected spelling of 'success'
import errormessage from '../utiles/errormessage.js'; // Corrected spelling of 'error'

class replyEmail {
    static async sendReply(req, res) {
        try {
            const { userInfo } = req.body;
            const replying = await replyemail(userInfo);

            if (replying) {
                return sucessmessage(res, 201, `email successfully`, replying);
            } else {
                return errormessage(res, 204, `not email sent`);
            }
        } catch (error) {
            return errormessage(res, 500, `reply error is: ${error}`);
        }
    }
}

export default replyEmail;
