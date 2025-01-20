import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anurag:anurag123@cluster0.in5lf.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}