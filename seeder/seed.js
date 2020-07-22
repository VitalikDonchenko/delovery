import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
import CourierModel from "../models/courierModel.js";
import OrderModel from "../models/orderModel.js";

mongoose.pluralize(null);
mongoose.connect("mongodb://localhost:27017/delovery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "Ошибка соединения с MongoDB")
);

(async function () {
  const user1 = new UserModel({
    userName: 'Alex',
    phone: '+79161234567',
    email: 'alex@example.com',
    password: bcrypt.hash('password', 10),
    location: 'Location',
    ordersArchive: [],
    currentOrder: null,
  });
})();
