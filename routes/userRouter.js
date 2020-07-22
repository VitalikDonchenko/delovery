import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('userSignup');
});

router.post('/signup', async (req, res) => {
  const {
    userName,
    phone,
    email,
    location,
    password,
  } = req.body;
  const newUser = new User({
    userName,
    phone,
    email,
    location,
    password,
  });
  await newUser.save();
  res.redirect('/offers');
});

export default router;
