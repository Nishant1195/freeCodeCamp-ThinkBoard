import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/notes", noteRoutes);
connectDB();

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

