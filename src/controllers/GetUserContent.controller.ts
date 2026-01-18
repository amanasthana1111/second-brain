import type { Request, Response } from "express";
import { ContentModel } from "../Models/user.models.js";
import { model } from "mongoose";

export const GetUserData = async (req: Request, res: Response) => {
 try {
     // @ts-ignore
  const userId = req.userId;
  const userData = await ContentModel.find({ userId })  .populate("userId", "username");
  if (!userData) {
    return res.json({
      mess: "No Data found",
    });
  }
  return res.json({
    data: userData,
  });
 } catch (error) {
    
    return res.json({
      mess: "Something Wrong" + error
    });
  
 }
};
