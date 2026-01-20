import express from "express";
import mongoose from "mongoose";
const router = express.Router();

import { GetAllProduct } from "../controllers/product.conrtroler.js";

router.get("/", GetAllProduct);

export default router;

export const validateParams = () => (req, res, next) => {
  const idParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
  });
  const { error } = idParamSchema.validate(req.params);
  if (error) return res.status(400).json({ message: error.message });
  next();
};
