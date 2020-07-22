import express from 'express';

const router = express.Router();

router.get('/singnup', (req, res) => {
  res.render('userSignup')
})

export default router;
