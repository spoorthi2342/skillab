import { Router} from "express";
import { authLogin,authRegister,allauth } from "../controllers/authentiction.cont.js";
import valid from "../Middleware/valid.mid.js";
const route=Router()


route.post("/register", valid,authRegister)
route.post("/login",valid,authLogin)
route.get("author", allauth)

export default route;