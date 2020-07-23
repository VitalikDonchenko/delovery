import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('routers offers');
  // res.render('offers');
});

// router.get('/:id', (req, res) => {
//   res.render('offer');
// });

export default router;
