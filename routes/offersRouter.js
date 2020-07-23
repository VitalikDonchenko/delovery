import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

// router.get('/:id', (req, res) => {
//   res.render('offer');
// });

export default router;
