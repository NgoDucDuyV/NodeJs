import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * 1. Khai báo Schema
 * - Định nghĩa cấu trúc dữ liệu
 * - Validate dữ liệu đầu vào
 */
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be greater than or equal to 0"],
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock must be >= 0"],
    },
  },
  {
    timestamps: true,
    strict: "throw",
  }
);

/**
 * 2. Tạo Model
 * - Là “cổng” để làm việc với MongoDB
 */
const Product = mongoose.model("Product", productSchema);

/**
 * 3. Export Model
 */
export default Product;
