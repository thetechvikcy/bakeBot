// // const express = require("express");
// // const cors = require("cors");
// // const axios = require("axios");
// import express from "express";
// import cors from "cors";
// import axios from "axios";

// // require("dotenv").config();
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // .get
// app.get("/", (req, res) => {
//   res.send("Welcome to the Gemini Recipe Assistant API!");
// });

// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body;
//   const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

//   try {
//     const response = await axios.post(
//       "https://api.together.xyz/v1/chat/completions",
//       {
//         model: "meta-llama/Llama-3-70b-chat-hf",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are BakeBot, a fun, engaging chef who hosts a cooking show! You love the kitchen, love your audience, and always explain recipes with excitement, encouragement, and a dash of humor.",
//           },
//           { role: "user", content: message },
//         ],
//         max_tokens: 512,
//         temperature: 0.8,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${TOGETHER_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json({ response: response.data.choices[0].message.content });
//   } catch (err) {
//     console.error(
//       "Llama API error:",
//       err.response?.data || err.message || err
//     );
//     res.status(500).json({ error: "Failed to get response from Llama" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on port : http://localhost:${PORT}`)
// );
import express from "express";
import cors from "cors";
import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB Setup
mongoose
  .connect(
    "mongodb+srv://idolvickyverma:473lMF4NuF0mzqI5@user.d5jecca.mongodb.net/userdata?retryWrites=true&w=majority&appName=user"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  activity: String,
  healthConditions: [String],
  diet: [String],
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the BakeBot API!");
});

// 🧠 LLaMA-3 Recipe Chat Route
app.post("/api/chat", async (req, res) => {
  const { message, userData } = req.body;
  console.log("userData received in /api/chat:", userData); // <-- Add this
  const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY;

  // Build a personalized system prompt
  let systemPrompt =
    "You are BakeBot, a fun, engaging chef who hosts a cooking show! ";

  // Add this line for debugging:
  if (userData) {
    systemPrompt += `DEBUG: User profile received: ${JSON.stringify(userData)}. `; // <-- Add this

    systemPrompt += `The user profile: Name: ${userData.name}, Age: ${
      userData.age
    }, Gender: ${
      userData.gender
    }, Health conditions: ${userData.healthConditions?.join(
      ", "
    )}, Dietary preferences: ${userData.diet?.join(
      ", "
    )}. Give recipe advice and tips tailored to their needs, restrictions, and preferences.`;
  } else {
    systemPrompt += "Give general recipe advice.";
  }

  try {
    const response = await axios.post(
      "https://api.together.xyz/v1/chat/completions",
      {
        model: "meta-llama/Llama-3-70b-chat-hf",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.8,
      },
      {
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ response: response.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Failed to get response from Llama" });
  }
});

// 📝 Save User Health Form Data
app.post("/api/user", async (req, res) => {
  try {
    const data = {
      ...req.body,
      healthConditions: req.body.healthConditions || [],
      diet: req.body.diet || [],
    };
    const newUser = new User(data);
    await newUser.save();
    res.cookie("bakebot_user_id", newUser._id.toString(), {
      httpOnly: true,
      sameSite: "Lax",
    });

    res.json({ message: "User data saved successfully!" });
    // res.json({ message: "User data saved successfully!", userId: newUser._id });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Failed to save user data." });
  }
});

app.get("/api/user/me", async (req, res) => {
  const userId = req.cookies.bakebot_user_id;
  if (!userId) return res.status(401).json({ message: "Not logged in" });
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user data." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
