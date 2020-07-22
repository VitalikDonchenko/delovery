import mongoose from "mongoose";
import { offerScheme } from "./offerModel.js";

const userScheme = mongoose.Schema({
  userName: String,
  phone: String,
  email: String,
  password: String,
  location: String,
  ordersArchive: [offerScheme],
  currentOrder: offerScheme,
});

export default mongoose.model("users", userScheme);
