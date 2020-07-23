import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('it is alive!')
  res.render('home');
});

router.post('/geocode', (req, res) => {
  
})

export default router;
