import nc from "next-connect";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { connectDB } from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import { createActivationToken } from "../../../utils/tokens";
import { BASE_URL } from "../../../constants";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await connectDB();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email." });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "Email already exist... Sign up with different email address",
      });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atlest 6 characters" });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });
    const user = await newUser.save();
    const activation_token = createActivationToken({
      id: user._id.toString(),
    });
    const url = `${BASE_URL}/activate/${activation_token}`;
    res.send(url);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
