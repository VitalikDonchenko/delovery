import express from 'express';
import Couriers from '../models/courierModel.js';
import bcrypt from 'bcrypt';

console.log('started courier');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('courier/courierSignup');
});

router.post('/signup', async (req, res) => {
  try {
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
      password: await bcrypt.hash(courierpassword, 10),
    });
    await newCouriers.save();
    res.redirect('/courier/newOffer');
  } catch (error) {
    console.log('BD courierSave is NOT working!');
  }
});

router.get('/newOffer', (req, res) => {
  res.render('courier/courierNewOffer');
});

export default router;
