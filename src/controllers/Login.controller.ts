import type { Request, Response } from "express";
import { LoginVali, type loginType } from "../Validations/Login.validation.js";
import { UserModel } from "../Models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/envConfig.js";

export const Login = async (req: Request, res: Response) => {
  try {
    const parsingData = LoginVali.safeParse(req.body);
    if (!parsingData.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid input",
      });
    }

    const { username, password }: loginType = parsingData.data;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id.toString() },
      env.JWT_PASS,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });

  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
