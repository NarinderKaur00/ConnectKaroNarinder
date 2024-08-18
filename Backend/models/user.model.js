import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required: true,unique:true},
    email:{type:String,required: true,unique:true},
    password:{type:String,required: true},
    profilePicture:{type:String,default:''}, //agar no pic then do default
    bio:{type:String,default:''},
    gender:{type:String,enum:['male','female']}, //option me hota h ye so we use enum
    follower:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}], //now understand this as humare followers aur following me user honge and they are in multiple data so we use array and the type is user and the ref is also user so the id is stored, id is kept so to search which user is following
    following:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}], //total post kitni hoti h
    bookmarks:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}] // ref post hoga user nahi as post ko bookmark krte h user ko nahi
},{timestamps:true});
export const User=mongoose.model('User',userSchema);