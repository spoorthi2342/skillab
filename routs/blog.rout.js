import {Router} from "express"
import { createBlog,allBlogs,getauthordidblog } from "../controllers/blog.cont.js"
import authorauth from "../Middleware/authentication.mid.js"
import valid from "../Middleware/valid.mid.js" 

const route=Router()

route.post("blogs",authorauth,valid,createBlog)
route.get("/blogs",allBlogs)
route.get("blogs/:emailId",getauthordidblog)

export default route;