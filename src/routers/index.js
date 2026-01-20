import express from "express";
import userRouter from "./useRouter.js";
import productRouter from "./productRouter.js";
const router = express.Router();

router.use("/user", userRouter);

router.use("/product", productRouter);

export default router;
