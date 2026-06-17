// require('dotenv).config({path: './env'})
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import connectDb from "./db/db.js";
import {app} from './app.js'

connectDb()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
     console.log(`Example app listening on port ${process.env.PORT}`);//8000
})
    
})
.catch((err)=>{
    console.log("Mongo Db connection failed!!!", err);
})

// two most imp-->
// 1) always write the code of DB connection in try,catch bec. it may provides an error while connection of DB with backend

// 2) DB is always in another continent

// Approach of connecting of DB

// 1) write the code of connecting DB in index.js file. It is less prefferd.

// 2) make another file in any folder (here you can make in DB) & then write this code in that file it makes more modular & reusable


/* 
import express from "express"
const app = express()
// use of IFEE 
;(async () => { // sometimes async gives an error bec. previous lines never ends with semicolon so it is a good habit of write ; at the sarting of async

    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        application.on("error", (error)=>{
            console.log("error: ", error);
            throw error
        })
        application.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("error : ", error);
    }
})
*/