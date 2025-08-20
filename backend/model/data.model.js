import mongoose from "mongoose";

 
 const userschema= new mongoose.Schema ({
  name:{
    type:String,
    required:true,
   minlength: 4,
   trim:true

  },
  email:{
  type: String,
    required: true,
    unique: true, 
    lowercase: true, 
    trim: true
 },
   password:{
   type:String,
   required:true,
   unique:true,
   trim:true

    },
    assistantname :{
        type:String,
             trim:true,
        minlength:4
    },
    assistantimage:{
        type:String
    },
   history:[
        {type:String}
   ]
 

},{timestamps:true})

const Users=mongoose.model("Users" ,userschema)

export default Users;