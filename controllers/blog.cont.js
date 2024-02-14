let blog={}

const createBlog= async(req,res)=>{
    const {blog}=req.body
    const author= req.author

    if(blog[author])
    blog[author]=[...blog[author],blog]
    else
    blog[author]=[blog]
res.send("uploaded successfully!")

}
const allBlogs= async (req,res)=>{
    res.json({blog:blog})
}

const getauthordidblog=(req,res)=>{
    const emailId=req.params.emailId
    const blog=blog[emailId]
    res.json({blog:blog})
}
export {allBlogs,getauthordidblog,createBlog};
