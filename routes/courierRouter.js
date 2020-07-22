import express from 'express';

const router = express.Router();

router.get('/singnup', (req, res) => {
  res.render('courierSignup')
})

export default router;
