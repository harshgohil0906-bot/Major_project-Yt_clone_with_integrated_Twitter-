import dotenv from "dotenv"
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

dotenv.config({ path: './.env' })

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.get("/",async (req,res)=>{
    res.send("Hello server chal rha hai");
});

// routes import
import router from './routes/user.routes.js'

// app.js--> user.routes.js --> user.controllers.js
// routes declaring --> now we have to use app.use() instead of app.get bec. we are writing routes in different file so we use here middleware

app.use("/api/v1/users", router)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    const errors = err.errors || []

    res.status(statusCode).json({
        success: statusCode < 400,
        statusCode,
        message,
        errors
    })
})

//http://localhost:8000/api/v1/users/register
export {app}