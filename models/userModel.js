import mongoose from "mongoose";

const userScheme = mongoose.Schema({
  userName: String,
  phone: String,
  email: String,
  password: String,
  location: String,
  ordersArchive: [orderScheme],
  currentOrder: orderScheme,
});

export default mongoose.model("users", userScheme);
