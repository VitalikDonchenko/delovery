import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { sessionCourierChecker, sessionUserChecker } from '../middleware/sessionWorker.js'

console.log('started user');

const router = express.Router();

router.get('/signup', sessionCourierChecker, sessionUserChecker, (req, res) => {
  res.render('user/userSignup');
});

router.post('/signup', async (req, res) => {
  try {
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
      password: await bcrypt.hash(userPassword, 10),
      location: userLocation,
    });
    await newUser.save();
    req.session.user =  newUser;
    res.redirect('/offers');
  } catch (error) {
    console.log('BD userSave is NOT working!');
  }
});

export default router;
