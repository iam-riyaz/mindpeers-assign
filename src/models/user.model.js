import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
  });
  
  
  export const userSchema= new mongoose.Schema({
    username: String,
    chats:{type:[chatSchema],default:[]}
  })
  export const User = mongoose.model("User",userSchema)