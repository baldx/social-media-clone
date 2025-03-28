require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");


const app = express();
app.use(express.json()); // allows reading JSON data
app.use(cors({
    origin: "http://localhost:5173",
})); // enables cross-origin requests

app.use("/api/users", userRoutes);

// connect to MongoDB
console.log("Mongo URI:", process.env.MONGO_URI);
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
    console.log("Using database:", mongoose.connection.db.namespace);
  })
  .catch((err) => console.error("MongoDB connection error:", err));


// simple API route
app.get("/", (req, res) => {
  res.send("API is running...");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));