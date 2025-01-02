
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import seatRoutes from "./routes/seatRoutes";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables


const app = express();
const port = process.env.PORT || 5000; // Fallback to port 5000 if PORT is undefined
const mongodbUrl = process.env.MONGODB_URL;

if (!mongodbUrl) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", seatRoutes);

// MongoDB Connection
mongoose
  .connect(mongodbUrl, {  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });


