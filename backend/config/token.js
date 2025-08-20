import jwt from "jsonwebtoken"

const gentoken= (userId)=>{
    try
    {
     const  tokenkey= jwt.sign({userId},process.env.JWT_SECRET)
     return tokenkey;
    } catch(error){
console.log(error)
    }
}
export default  gentoken