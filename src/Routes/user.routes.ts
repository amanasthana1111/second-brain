import  express, { Router }  from "express";
import { SignUp } from "../controllers/SignUp.controller.js";
import { Login } from "../controllers/Login.controller.js";
import { PostContent } from "../controllers/PostContent.controller.js";
import { UserAuth } from "../middleware/UserAuth.middleware.js";
import { GetUserData } from "../controllers/GetUserContent.controller.js";

const router = Router();

router.post("/signUp" , SignUp)
router.post("/login" , Login)
router.post("/content",UserAuth,PostContent)
router.get("/content",UserAuth,GetUserData)


export {
    router
}