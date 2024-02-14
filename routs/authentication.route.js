import { Router} from "express";
import { authLogin,authRegister,allauth } from "../controllers/authentiction.cont";
import valid from "../Middleware/valid.mid";
const route=Router()


route.post("/register", valid,authRegister)
route.post("/login",valid,authLogin)
route.get("author", allauth)

export default Router;