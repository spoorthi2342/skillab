import {setToken} from "../util/Token";
const authList={}
const authRegister = async (req,res)=>{
    const{name,emailId,password}=req.body
    if(authList[emailId])
    res.status(409).send("Email Id already been Registered!!")

    authList[emailId]={
        name,emailId,password
    }
    res.status(200).send("Registration is successfull!")

}

const authLogin= async(req,res)=>{
const{emailId,password}=req.body

if(!authList[emailId])
res.status(404).send("Invaliid Username and email Id")

else{
    if(authList[emailId].password!==password)
    res.status(401).send("inavalid Password!")
    else{
        setToken(emailId)
        res.status(200).send("Login is successfull!")
    }
}
}

const allauth =  async (req,res) => {
    res.status(200).json({authors:authList})

}

export{authRegister,authLogin,allauth}