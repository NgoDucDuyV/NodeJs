import express from "express";
import dotenv from "dotenv";
import router from "./routers/index.js";
import { connectDB } from "./config/connectDB.js";

dotenv.config();
const app = express();

app.use("/api", router);

const port = process.env.PORT || 5002;
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Đang chạy server thành công ${port}`);
  });
});
