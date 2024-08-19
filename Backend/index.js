import express, { urlencoded } from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from './utils/db.js'; //here add .js at last of file
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";


dotenv.config({});

const app = express();

const PORT =process.env.PORT || 3000;  //.env se port ayega aur agar nahi excess hua toh 3000 use hoga

app.get("/",(_,res)=>{
    return res.status(200).json({
        message:"I'm coming from backend", // this will go to browser
        success:true
    })
})
// by default middlewares we have to add in every project
app.use(express.json());
app.use(cookieParser()); // this is used when we make a request from browser in backend then the token is stored in cookies only, if not used then it will not go to backend
app.use(urlencoded({extended:true}));
const corsOption ={
    origin:'http://localhost:5173', //we use react white, oska port number hota h
    credentials:true
}
app.use(cors(corsOption));

// yaha pr apni API's ayenge
app.use("/api/v1/user",userRoute); //ye common rahega "/api/v1/user" then aage register login logout ese aata rahega
app.use("/api/v1/post",postRoute);
app.use("/api/v1/message",messageRoute);


app.listen(PORT,()=>{  //listen karenge oske baad connect karenge
    connectDB();
    console.log(`Server listen at port ${PORT}`); // here we use ` not '
})