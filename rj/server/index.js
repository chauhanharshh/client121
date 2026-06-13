import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import { Content } from "./models/Content.js";

// Setup environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/routestory_cms";
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can change this based on your provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- API ROUTES ---

// 1. Fetch CMS Content
app.get("/api/content", async (req, res) => {
  try {
    let contentDoc = await Content.findOne();
    if (!contentDoc) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.json(contentDoc.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Update CMS Content
app.put("/api/content", async (req, res) => {
  try {
    const newData = req.body;
    let contentDoc = await Content.findOne();
    
    if (contentDoc) {
      contentDoc.data = newData;
      await contentDoc.save();
    } else {
      // If no document exists yet, create one
      contentDoc = new Content({ data: newData });
      await contentDoc.save();
    }
    
    res.json({ message: "Content updated successfully", data: contentDoc.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Contact Form Submission (Mail Automation)
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, destination, travelDate, message } = req.body;

  try {
    // Send email to Admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Journey Enquiry from ${name}`,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Destination:</strong> ${destination || "N/A"}</p>
        <p><strong>Travel Date:</strong> ${travelDate || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 4. Submit Review
app.post("/api/reviews", async (req, res) => {
  const newReview = req.body;
  // newReview should have author, location, journey, quote, etc.
  try {
    let contentDoc = await Content.findOne();
    if (contentDoc) {
      newReview.id = Date.now();
      // Append to testimonialsData array
      contentDoc.data.testimonialsData = [newReview, ...(contentDoc.data.testimonialsData || [])];
      
      // Mongoose Mixed type requires markModified when mutating deeply nested objects
      contentDoc.markModified('data.testimonialsData');
      await contentDoc.save();
      
      res.json({ message: "Review added successfully", review: newReview });
    } else {
      res.status(404).json({ error: "CMS content not initialized" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- SERVE FRONTEND (Render Monolithic Deployment) ---
// Serve the Vite static build from the 'dist' folder
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// Catch-all route to serve index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
