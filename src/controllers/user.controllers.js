import { asynchandler } from "../utils/aync_handler.js";


const registerUser = asynchandler( async (req,res) => {
    res.status(200).json({
        message: "api test succesful",
        
    })
})


export {
    registerUser,
}