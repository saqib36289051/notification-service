import dotenv from "dotenv";
import prisma from "@/utils/database.js";
import express from "express";
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// get all notifications from the database
app.get("/notifications", async (req, res) => {
  const notifications = await prisma.notification.findMany();
  res.json(notifications);
});

// create a new notification
app.post("/notifications", async (req, res) => {
  const { title, message, recipientId } = req.body;
  const notification = await prisma.notification.create({
    data: { title, message, recipientId },
  });
  res.json(notification);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});