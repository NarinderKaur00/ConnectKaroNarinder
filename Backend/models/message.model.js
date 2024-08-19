import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{  
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'  // relationship toh user ka hi hoga as msg is sent by user
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:String,
        required:true
    }
});
export const Message = mongoose.model('Message',messageSchema);