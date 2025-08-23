import Users  from "../model/data.model.js";
import gentoken from "../config/token.js";
import bcrypt from "bcrypt";



// ---------------- Signup ----------------
export const singup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exitemail = await Users.findOne({ email });
    if (exitemail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters!" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      name,
      email,
      password: hashpassword,x
    });

    const token = await gentoken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000, 
      sameSite: "strict",
      secure: false,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Signup error: ${error}` });
  }
};

// ---------------- Login ----------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exitemail = await Users.findOne({ email });
    if (!exitemail) {
      return res.status(400).json({ message: "Email does not exist!" });
    }

    const ismatch = await bcrypt.compare(password, exitemail.password);
    if (!ismatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = await gentoken(exitemail._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false,
    });

    return res.status(200).json(exitemail);
  } catch (error) {
    return res.status(500).json({ message: `Login error: ${error}` });
  }
};

// ---------------- Logout ----------------
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Logout error: ${error}` });
  }
};
