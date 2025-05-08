import mongoose from "mongoose";

export const dbConnect = ()=>{

    mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });
}