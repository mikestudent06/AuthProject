import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";
import db from "./db.js"
import authRoutes from "./routes/authRoutes.js"

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
        credentials: true
    }
))

// Use the authRoutes
app.use('/auth', authRoutes);

app.listen("8000", ()=> {
    console.log("running server");
})