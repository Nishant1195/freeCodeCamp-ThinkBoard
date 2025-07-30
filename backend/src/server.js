import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());//middleware for parsing json file

app.use((req,res, next) => {
    console.log(`${req.method}`);
    console.log(`${req.url}`);
    next();

})//custom middleware for understanding middleware

app.use("/api/notes", noteRoutes);
connectDB();



app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

