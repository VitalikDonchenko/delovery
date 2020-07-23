import express from 'express';
import { OfferModel } from '../models/offerModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const offers = await OfferModel.find();
  // console.log(offersList);
  res.render('offer/offers', { offers });
});

// router.post('/:id', (req, res) => {
//   res.render('offer');
// });

export default router;
