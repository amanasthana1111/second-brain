import  express, { Router }  from "express";
import { SignUp } from "../controllers/SignUp.controller.js";
import { Login } from "../controllers/Login.controller.js";

const router = Router();

router.post("/signUp" , SignUp)
router.post("/login" , Login)



export {
    router
}