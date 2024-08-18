import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully.');
    } catch (error){
        console.log(error); //agar error aaya toh print kro error
        
    }
}
export default connectDB;