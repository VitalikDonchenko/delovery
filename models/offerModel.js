import mongoose from "mongoose";

export const offerScheme = mongoose.Schema({
  contents: [String],
  picSrc: String,
  price: Number,
  createdAt: Date,
  courierId: String,
  location: String,
  coordinates: String,
});

export const OfferModel = mongoose.model("offers", offerScheme);
