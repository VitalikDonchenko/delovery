import mongoose from "mongoose";
import { offerScheme } from "./offerModel.js";

const courierScheme = mongoose.Schema({
  userName: String,
  phone: String,
  email: String,
  password: String,
  ordersArchive: [offerScheme],
  currentOrder: offerScheme,
});

export default mongoose.model("couriers", courierScheme);
