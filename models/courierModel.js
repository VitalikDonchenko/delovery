import mongoose from "mongoose";

const courierScheme = mongoose.Schema({
  userName: String,
  phone: String,
  email: String,
  password: String,
  ordersArchive: [orderScheme],
  currentOrder: orderScheme,
});

export default mongoose.model("couriers", courierScheme);
