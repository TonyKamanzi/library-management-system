import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const userExsits = await User.findOne({ email });
    if (userExsits) {
      return res.status(400).json({ message: "User Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword, role });
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json("Invalid Ccreditials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json("Invalid Creditials");
    }

    req.session.userId = user._id;
    res.json({ message: "Login Succefully" });
  } catch {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const logout = (req, res) => {
  req.session.destory(() => {
    res.clearCookie("connects.sid");
    res.json({ message: "Logged out" });
  });
};
