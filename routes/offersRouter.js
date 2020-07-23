import express from 'express';
import { OfferModel } from '../models/offerModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const offers = await OfferModel.find();
  // console.log(offersList);
  res.render('offer/offers', { offers });
});

router.get('/:id', (req, res) => {
  const offer = {
    _id: 1,
    contents: ['dkfjbkdfhgkd', 'sdkfjksgfksgfjksf'],
    price: 50,
    createdAt: '12 dec 2020'
  }
  res.render('offer/offer', { offer });
});

export default router;
