import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const router = express.Router();

// router.post('/', async (req, res) => {
//   const { email, password } = req.body;
//   const find = await User.findOne({ email });
//   if (find && await bcrypt.compare(password, find.password)) {
//     console.log("find");
//     req.session.user = find;
//     return res.redirect('/offers');
//   }
//   return res.redirect('signup');
// });

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
