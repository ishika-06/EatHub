import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ishikaaaaaa066:Seema688@cluster0.tencbrk.mongodb.net/food').then(() =>console.log("DB CONNECTED"));

}