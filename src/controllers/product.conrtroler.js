export const GetAllProduct = async (req, res) => {
  try {
    // const theaterSchema = new mongoose.Schema({}, { strict: false });
    // const Theater = mongoose.model("Theater", theaterSchema, "theaters");
    // //   console.log(Theater.find().limit(2));
    // const theaters = await Theater.find().limit(4);

    // res.status(200).json(theaters);
    res.status(200).json({
      status: true,
      message: "Lấy dữ liệu thành công",
      data: [products],
    });
    console.log("Lấy danh sách product dât thành công");
  } catch (error) {
    console.log("Lỗi kết nối GetAllProduct", error);
    res.status(500).json({
      status: false,
      message: "lỗi kết lỗi với csdl",
    });
  }
};
