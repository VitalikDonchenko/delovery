import express from 'express';
import Couriers from '../models/courierModel.js';
import { OfferModel } from '../models/offerModel.js';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('courier/courierSignup');
});

router.post('/signup', async (req, res) => {
  const {
    courierName,
    courierphone,
    courieremail,
    courierpassword,
  } = req.body;

  const newCouriers = new Couriers({
    userName: courierName,
    phone: courierphone,
    email: courieremail,
    password: courierpassword,
  });
  await newCouriers.save();
  res.redirect('/courier/newOffer');
});

router.get('/newOffer', (req, res) => {
  res.render('courier/courierNewOffer');
});

router.post('/newOffer', async (req, res) => {
  const {
    select,
    newOffer1,
    newOffer2,
    price,
  } = req.body;

  let picSrc;
  if (select === 'Macdonalds') {
    picSrc = 'Macdonalds';
  }
  if (select === 'KFC') {
    picSrc = 'KFC';
  }
  if (select === 'KFC') {
    picSrc = 'BurgerKing';
  }

  const newOffer = new OfferModel({
    contents: [newOffer1, newOffer2],
    picSrc,
    price,
    createdAt: new Date(),
  });
  await newOffer.save();

  res.redirect('newOffer');
});

export default router;
