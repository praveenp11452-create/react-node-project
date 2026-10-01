import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import blogRoutes from "./routes/blogRoutes.js";
import seedBlogs from "./seed.js";

const app = express();

// Middleware
app.use(express.json());

const corsFunc = cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
app.use(corsFunc);

// Connect to MongoDB
connectDB();
seedBlogs();
// Routes
app.use("/bloglist", blogRoutes);

// Start Server
app.listen(8080, () => {
  console.log("Server started on port 8080");
});

// http://localhost:8080