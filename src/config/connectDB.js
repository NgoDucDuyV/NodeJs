import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("liên kết CSDL thành công ! ");
  } catch (error) {
    console.log("Lỗi kết lỗi CSDL", error);
    process.exit(1); // thoát lếu lỗi
  }
};
