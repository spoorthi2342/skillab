const hash = (obj) =>{
    for(let key in obj)
     if(obj[key]==null)
     return true
    return false
}

const valid=async(req,res,next)=>{
    const body=req.body


    if(hash(body))
      res.send("enter the values")
    next()
}
 export default valid;