import mongoose from "mongoose";

const offerScheme = mongoose.Schema({
  contents: [Map],
  price: Number,
});

export default mongoose.model("offers", offerScheme);
