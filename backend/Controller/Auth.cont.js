import Users from "../../model/data.model.js"
import gentoken  from "../token.js"
import cookieParser from "cookie-parser"
import bcrypt, { hash } from "bcrypt"


export const  singup= async (req,res)=>{
    try{

     const {name,email ,password}=req.body;

     const exitemail= await Users.findOne({email});
     if(exitemail){
      return   res.status(400 ).json({message:"email already exits !"})
     }
     if(password.length<6){
         return   res.status(400 ).json({message:"password must be at 6 characters !"})
     }
         const hashpassword=await bcrypt.hash(password,10)
          const user=await Users.create({
            name,password:hash,email
          })

          const token=await gentoken(user._id)
          req.cookie("token",token,{
  httponly:true,
  maxAge:true,
  sameSite:2*24*60*60*1000,
  secure:false
          })

          req.status(200).json(user)
    }catch (error){
   return res.status(201).json({message:`singup error ${error}`})
    }
}

export const login= async (req,res)=>{
    try{

     const {email ,password}=req.body;

     const exitemail= await Users.findOne({email});
     if(!exitemail){
      return   res.status(400 ).json({message:"email does not exits !"})
     }
     const ismatch=await bcrypt.compare(password, exitemail.password)
     if(!ismatch){
        return   res.status(400 ).json({message:"incorrect password"})
     }
          const token=await gentoken(user._id)
          req.cookie("token",token,{
  httponly:true,
  maxAge:true,
  sameSite:2*24*60*60*1000,
  secure:false
          })

          req.status(201).json(user)
    }catch (error){
   return res.status(201).json({message:`login error ${error}`})
    }
}


export const  logout=async (req,res)=>{
    try {
    res.clearCokkie("token")
        return res.status(200).json({message:"Logout succesfully"})

    } catch (error){
         res.status(201).json({message:`logout error ${error}`})
    }

 }