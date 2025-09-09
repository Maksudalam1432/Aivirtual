import mongoose from "mongoose"

 const connectdb= async ()=>{
     try {
     
        await mongoose.connect("mongodb://localhost:27017/virtual")

        console.log("connect succesfully")
     }                  
     catch{
    console.log("connect db failed")
     }
 }

 export default connectdb