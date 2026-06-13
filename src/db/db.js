import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const connectDb = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.log("MONGODB connection FAILED: ", error);
        process.exit(1) // we can exit the procces by writting throw 
    }
}
export default connectDb