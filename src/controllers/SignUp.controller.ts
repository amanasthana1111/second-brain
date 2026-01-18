import type { Request, Response } from "express";
import {
  SignupVali,
  type SignupType,
} from "../Validations/Signup.validations.js";
import { UserModel } from "../Models/user.models.js";
import bcrypt from "bcrypt";


export const SignUp = async (req: Request, res: Response) => {
  try {
    const parsingData = SignupVali.safeParse(req.body);
    if (!parsingData.success) {
      return res.status(411).json({
        message: "Error in Input",
        error : parsingData.error
      });
    }
    const { username, password }: SignupType = parsingData?.data;
    const isUserExist = await UserModel.findOne({ username });
    if (isUserExist) {
      return res.status(403).json({
        success: false,
        mess: "User Allready exist",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const isUpload = await UserModel.create({
      username,
      password: hashPassword,
    });
    if (!isUpload) {
      return res.status(500).json({
        success: false,
        mess: "Server error",
      });
    }
    res.status(200).json({
      success: true,
      mess: "User Created",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
