import express from "express";
import authRouter from '../routs/authentication.route.js'
import blogRouter from '../routs/blog.rout.js'
 

const app=express()
app.use(express.json())

app.use("/auth",authRouter)
app.use("/blog",blogRouter)


const PORT =4000

app.listen(PORT,() =>   console.log("server strated running successfully",PORT))