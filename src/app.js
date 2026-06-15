import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'
console.log("Hii");
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.get("/",async (req,res)=>{
    res.send("Hello server chal rha hai");
});

// routes import
import userRouter from './routes/user.routes.js'

// app.js--> user.routes.js --> user.controllers.js
// routes declaring --> now we have to use app.use() instead of app.get bec. we are writing routes in different file so we use here middleware
app.use("/api/v1/users", userRouter)

//http://localhost:8000/api/v1/users/register
export {app}