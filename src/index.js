import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

// mongoose.connect(`${MONGO_URL}`, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Connected to database");
//   }
// });

mongoose.connect(
  // `mongodb+srv://quizer:easypassword@quizify.cg0zyp9.mongodb.net/quizify?retryWrites=true&w=majority`
  MONGO_URL
);

app.listen(PORT, () => {
  console.log(MONGO_URL);
  console.log("The server is up at 8000");
});
