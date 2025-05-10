import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import { dbConnect } from "./database/dbconfig.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from './routes/user.routes.js'

dotenv.config();

const app = express()
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);


app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(PORT, () => {
    dbConnect();
    console.log('Server is running on port ',PORT)
})

