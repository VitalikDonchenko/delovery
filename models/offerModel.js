import mongoose from "mongoose";

export const offerScheme = mongoose.Schema({
  contents: [Map],
  price: Number,
});

export const OfferModel = mongoose.model("offers", offerScheme);
