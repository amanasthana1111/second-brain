import type { Request, Response } from "express";
import { ContentModel, linkModel } from "../Models/user.models.js";

export const AccessLink = async (req: Request, res: Response) => {
  try {
    const { shareLink } = req.params;
    const link = await linkModel.findOne({ hash: shareLink });
    if (!link) {
      return res.status(404).json({ message: "Invalid or expired link" });
    }

    const documents = await ContentModel.find({
      userId: link.userId,
    });

    return res.status(200).json({ data: documents });
  } catch (error) {
    return res.status(500).json({ message: "Server error" + error });
  }
};
