const express = require("express");
const User = require("../models/user");

const router = express.Router();

// route to create a user
router.post("/add", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User added!", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// route to get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
