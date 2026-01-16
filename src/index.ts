import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { router } from "./Routes/user.routes.js";
import { connectDB } from "./DB/dbConnection.js";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        succss : true
    })
})

app.use("/api/v1" , router )

const main = async()=>{
try {
    await connectDB()
    app.listen(3000,()=>{
    console.log("Server Started")
    
})
} catch (error) {
    console.log("Server Stop " ,error)
}
}

main()

