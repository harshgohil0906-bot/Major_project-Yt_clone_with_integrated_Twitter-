import mongoose, {Schema} from "mongoose";// if we don't write {Schema} here then we have to write model.Schema in 2nd line
import jwt from "jsonwebtoken"
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String, // cloudnary url
        required: true,
        trim: true,
    }, 
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String, // cloudnary url

    },
    watchHisory: [
        {
            type: Schema.Types.ObjectId,
            ref: "video"
        }
    ],
    password: {
        type: String, // challanging but we wil solve later bec we kept as string it may leak through database & if we kept as a encrypted how do we compare encrypted pass to original pass bec. encrypted shows big string
        // so it is solved by bcrypt package
        required: true
    },
    refreshToken : {
        type: String
    }

}, {timstamps: true})

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccesssToken = function(){
    return jwt.sign(
        {
        id: this.id,
        email : this.email,
        username : this.username,
        fullname : this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)