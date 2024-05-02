import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import connection from './db/connection.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("Server is running"); 
})

// Authentication routes
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connection();
    console.log(`Server is running on port ${PORT}`);
})