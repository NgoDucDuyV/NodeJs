import { Schema } from "mongoose";

export const getAllUsers = async (req, res) => {
  try {
    const userSchema = new Schema({}, { strict: false });
  } catch (error) {
    console.log("lỗi liên kết getAllUsers", error);
  }
};
