import type { Request, Response } from "express";
import { ContentModel } from "../Models/user.models.js";

export const DeleteContent = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const userId = req.userId;
    const {id} = req.params;
    if(!id){
        return res.json({
            mess : "id not found"
        })
    }
    const userDelete = await ContentModel.deleteOne({_id : id})
    res.json({
        success : true,
        mess : "Content Delete Successfull"
    })

  } catch (error) {
    res.json({
        mess : "Something Wrong" + error
    })
  }
};
