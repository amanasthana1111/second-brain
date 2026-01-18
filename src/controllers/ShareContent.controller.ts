import type { Request, Response } from "express";
import { linkModel } from "../Models/user.models.js";
export const ShareLink = async (req: Request, res: Response) => {
  //@ts-ignore
  const userId = req.userId;
  const success: string = req.body.success;
  if (success === "false") {
    const data = await linkModel.deleteMany({ userId });
    if (data) {
      return res.json({
        mess: "Link Rekove",
      });
    }
    return;
  }
  if (success === "true") {
    const ShareId: string = linkGen();
    const data = await linkModel.create({
      hash: ShareId,
      userId,
    });
    if (!data) {
      res.json({
        success: false,
        mess: "Something Broke",
      });
    }
    res.json({
      success: true,
      Link: ShareId,
      mess: "Link Generate",
    });
  } else {
    return res.json({
      mess: "HAHAHA",
    });
  }
};

const linkGen = () => {
  const chars: string =
    "qwertyuiopasdfghjklzxcvbnm" + "QWERTYUIOPLKJHGFDSAZXCVBNM" + "1234567890";
  let Link: string = "";
  for (let i: number = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    Link += chars[randomIndex];
  }
  return Link;
};
