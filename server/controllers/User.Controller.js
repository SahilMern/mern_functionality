import User from "../models/User.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//TODO:- userRegister Api
export const userRegster = async (req, res) => {
  try {
    // console.log(req.body, "Request data");
    const { id, name, email, phone, address, password, cpassword } = req.body;
    if (!id || !name || !email || !phone || !address) {
      return res.status(400).json({
        message: "All Field is required",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    //  console.log(hashPassword, "hashpassw");

    const userdata = new User({
      id,
      name,
      email,
      phone,
      address,
      password: hashPassword,
    });
    const user = await userdata.save();
    return res.status(200).json({
      message: "User register sucessfully",
      user,
    });
    // const {} = req.body
  } catch (error) {
    console.log(error, "error");
  }
};

//TODO:- userLogin Api
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All Field required",
      });
    }

    const existUser = await User.findOne({ email });
    console.log(existUser, "exitUser");

    if (!existUser) {
      return res.status(400).json({
        message: "No Email register ",
      });
    }

    const comparePassword = await bcrypt.compare(password, existUser.password);
    console.log(comparePassword, "comparePassword");

    if (!comparePassword) {
      return res.status(400).json({
        message: "Password Doesn't match",
        token,
      });
    }
    const secret_key = process.env.JWT_SECRET || "yourSecretKey";
    const userData = { id: existUser._id, name: existUser.name };
    const token = jwt.sign(userData, secret_key, { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000, 
    });

    return res.status(200).json({
      message: "User login successful",
    });
  } catch (error) {
    console.log(error, "error");
  }
};



