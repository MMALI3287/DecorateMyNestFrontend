import express from "express";
import cors from "cors"; // Import the cors middleware
import sendEmail from "./controllers/emailController.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Use the cors middleware
app.use(cors());

app.use(express.json());

// Example route definition using POST method
app.post("/api/send-email", sendEmail);

// Other routes and configurations...

const PORT = process.env.REACT_APP_PORT || 3000;
app.listen(PORT, () => {
  const authCode = Math.floor(10000000 + Math.random() * 90000000).toString();
  console.log(authCode);
  console.log(`Server is running on port ${PORT}`);
});
