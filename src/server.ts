import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRoutes } from "./routes/post.routes";
import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/posts", postRoutes);

app.use(errorHandler);

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blog")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
