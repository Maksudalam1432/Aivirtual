import express from "express"
import { singup ,login ,logout } from "../config/Controller/Auth.cont.js"

 const AuthRoute=express.Router()

 AuthRoute.post("/singup",singup)
 AuthRoute.post("/login" ,login)
 AuthRoute.get("/logout",logout)


 export default AuthRoute;