import nc from "next-connect";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { connectDB, disconnectDB } from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import { createResetToken } from "../../../utils/tokens";
import { BASE_URL } from "../../../constants";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../components/Emails/resetEmailTemplate";

const handler = nc();

handler.put(async (req, res) => {
  try {
    await connectDB();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "This Account does not exist" });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: cryptedPassword,
    });
    res.json({ email: user.email });
    await disconnectDB();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
