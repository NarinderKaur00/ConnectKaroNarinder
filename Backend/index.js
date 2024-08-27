import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";//here add .js at last of file
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";
 
dotenv.config();


const PORT = process.env.PORT || 3000;//.env se port ayega aur agar nahi excess hua toh 3000 use hoga

const __dirname = path.resolve();

//middlewares
// by default middlewares we have to add in every project
app.use(express.json());
app.use(cookieParser());// this is used when we make a request from browser in backend then the token is stored in cookies only, if not used then it will not go to backend
app.use(urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:5173', //we use react white, oska port number hota h
    credentials: true
}
app.use(cors(corsOptions));

// yha pr apni api ayengi
app.use("/api/v1/user", userRoute);//ye common rahega "/api/v1/user" then aage register login logout ese aata rahega
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);


app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})



server.listen(PORT, () => {//listen karenge oske baad connect karenge
    connectDB();
    console.log(`Server listen at port ${PORT}`); // here we use ` not '
});