import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('offer/offer');
});

router.get('/:id', (req, res) => {
  const offer = {
    _id: 1,
    contents: ['dkfjbkdfhgkd', 'sdkfjksgfksgfjksf'],
    price: 50,
    createdAt: '12 dec 2020'
  }
  res.render('offer/offer', { offer });
});

export default router;
