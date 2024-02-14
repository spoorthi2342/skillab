import { Token } from "../util/Token";

const authorauth= async (req,res,next)=>{
    if(!Token)
    res.send("unauthorizes User!")
    else{
        req.author=Token
        next()
    }
}
export default authorauth;