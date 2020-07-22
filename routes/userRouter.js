import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('user/userSignup');
})

export default router;
