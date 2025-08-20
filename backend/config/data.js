import mongoose from "mongoose"


 const connectdb= async ()=>{
     try {
     
        await mongoose.connect(process.env.MONGO_UR)

        console.log("connect succesfully")
     }
     catch{
    console.log("connect db failed")
     }
 }

 export default connectdb