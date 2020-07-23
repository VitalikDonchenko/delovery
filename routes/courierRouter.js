import express from 'express';
import Couriers from '../models/courierModel.js';

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

router.post('/newOffer', (req, res) => {
  
});

export default router;
