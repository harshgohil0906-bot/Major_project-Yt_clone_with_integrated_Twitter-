import mongoose, {model, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videofile: {
        type: String, // cloudinary url
        required: true
    },
    thumbnail: {
        type: String, // cloudinary url
        required: true
    },
    tltle: {
        type: String, // cloudinary url
        required: true
    },
    description: {
        type: String, // cloudinary url
        required: true
    },
    duration: {
        type: Number, // cloudinary url
        required: true
    },
    views: {
        type: Number, // cloudinary url
        default: 0
    },
    ispublished: {
        type: Boolean, // cloudinary url
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})


videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video", videoSchema)
