import mongoose, { mongo } from "mongoose";
const postSchema = new mongoose.Schema({
    caption:{type:String,default:''},
    image:{type:String,required:true}, // true as without image you cannot post anything on instagram
    author:{type:mongoose.Schema.Types.ObjectId,ref :'User',required:true}, //author ki id save krno hoti h as to know ki konse user ne iss post ko create kiya h only then we can get all his posts
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}], //likes can be multiple so use array to store multiple data and ref is user as like is created by user
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}], //use array as multipe comments can come and ref is comment  because we want to keep a seperate model to keep the details of all the comments made by whom and what is commented
});
export const Post = mongoose.model('Post',postSchema);