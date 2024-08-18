// understand how the models are made

import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    text:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, // to know who made the comment
    post:{type:mongoose.Schema.Types.ObjectId,ref:'Post',required:true},
});
export default commentSchema = mongoose.model('Comment',commentSchema);