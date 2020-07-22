import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('courier/courierNewOffer')
})

export default router;
