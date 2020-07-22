import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('user/userSignup');
});

router.post('/signup', async (req, res) => {
  const {
    userName,
    userPhone,
    userEmail,
    userPassword,
    userLocation,
  } = req.body;
  const newUser = new User({
    userName,
    phone: userPhone,
    email: userEmail,
    password: userPassword,
    location: userLocation,
  });
  await newUser.save();
  res.redirect('/offers');
});

export default router;
