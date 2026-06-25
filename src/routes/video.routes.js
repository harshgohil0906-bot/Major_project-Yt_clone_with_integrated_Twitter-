import { Router } from "express"// Router is a class in express
import {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
} from "../controllers/video.controller.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()// creates new obj of Router class
router.use(verifyJWT) //Apply verifyJWT middleware to all routes in this file so that only logged-in users can access it

router.
    route("/") // we can run both get & post request at a time by same route by changing http method(GET, POST)
    .get(getAllVideos)
    .post(
        upload.fields([
            {
                name: "videoFile",
                maxCount: 1
            },
            {
                name: "thumbnail",
                maxCount: 1
            }
        ]),
        publishAVideo
    )

router
    .route("/videoId")
    .get(getVideoById)
    .delete(deleteVideo)
    .patch(upload.single("thumbnail"), updateVideo)

router.route("/toggle/publish/videoId").patch(togglePublishStatus)

export default router //Makes router available to other files.like in app.js file