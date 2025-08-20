
import express from "express"
 import connectdb from "./config/data.js"
import dotenv from "dotenv"
// import cookieParser from "cookie-parser"
// import AuthRoute from "./Route/Auth.route.js"
 const app= express()

dotenv.config()
 const PORT=process.env.PORT ||5000
//  app.use(express.json())
//  app.use(cookieParser())
//  app.use("/api/Auth",AuthRoute)

connectdb()
 app.listen(PORT , ()=>{
      console.log("server start on 4000")
 })