import {Router} from "express"
import { createBlog,allBlogs,getauthordidblog } from "../controllers/blog.cont"
import authorauth from "../Middleware/authentication.mid"
import valid from "../Middleware/valid.mid" 

const route=Router()

route.post("blogs",authorauth,valid,createBlog)
route.get("blogs/:emailId",getauthordidblog)

export default route;