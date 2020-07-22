import mongoose from "mongoose";

export const offerScheme = mongoose.Schema({

  contents: [String],

  price: Number,
});

export const OfferModel = mongoose.model("offers", offerScheme);
