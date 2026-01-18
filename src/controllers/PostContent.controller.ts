import type { Request, Response } from "express";
import NewContent, { type newContentType } from "../Validations/NewContent.js";
import { ContentModel, UserModel } from "../Models/user.models.js";
import { success } from "zod";

export const PostContent = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.userId;
    const parsingData = NewContent.safeParse(req.body);
    if (!parsingData.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid input",
        error : parsingData.error
      });
    }
    const { type, link, title, tags }: newContentType = parsingData.data;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.json({
        success: false,
        mess: "User Not Found",
      });
    }
    const addData = await ContentModel.create({
      link,
      type,
      title,
      tags,
      userId,
    });
    if (!addData) {
      return res.json({
        success: false,
        mess: "Something wrong",
      });
    }
    res.json({
      success: true,
      mess: "Content Added",
    });
  } catch (error) {
    res.json({
      success: false,
      mess: "Something Broke" + error,
    });
  }
};
