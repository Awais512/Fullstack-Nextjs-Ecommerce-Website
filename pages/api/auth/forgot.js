import nc from "next-connect";
import User from "../../../models/User";
import { connectDB, disconnectDB } from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import { createResetToken } from "../../../utils/tokens";
import { BASE_URL } from "../../../constants";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../components/Emails/resetEmailTemplate";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await connectDB();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email doesn't exist." });
    }

    const user_id = createResetToken({
      id: user._id.toString(),
    });
    const url = `${BASE_URL}/auth/reset/${user_id}`;
    sendEmail(email, url, "", "Reset Your Password", resetEmailTemplate);
    await disconnectDB();
    res.status(200).json({
      message: "An Email has been sent to you. Use it for reset your password",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
