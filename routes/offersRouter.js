import express from 'express';
import { OfferModel } from '../models/offerModel.js';
import UserModel from '../models/userModel.js';
import CourierModel from '../models/courierModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const offers = await OfferModel.find();
  // console.log(offersList);
  res.render('offer/offers', { offers });
});

router.get('/:id', (req, res) => {
  const offer = {
    _id: 1,
    contents: ['dkfjbkdfhgkd', 'sdkfjksgfksgfjksf'],
    price: 50,
    createdAt: '12 dec 2020',
  };
  res.render('offer/offer', { offer });
});

router.post('/offers/:id', async (req, res) => {
  try {
    const yourOrder = await OfferModel.findById(req.params.id);
    if (yourOrder) {
      const user = await UserModel.findOne({ email: req.session.user.email });
      const yourCourier = await CourierModel.findById(yourOrder.courierId);
      user.currentOrder = yourOrder;
      await user.save();
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deloveryelbrus@gmail.com',
        pass: 'Lyt5FPy27A',
      },
    });

    const mailOptions = {
      from: 'deloveryelbrus@gmail.com',
      to: user.email,
      subject: 'Your order',
      text: `Thank you for your choice! Your order number ${yourOrder._id}, will be delivered by courier ${yourCourier.userName} within 30 minutes. To clarify the details, you can contact him at the number ${yourCourier.phone}. Enjoy your meal!`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log(`email sent${info.response}`);
    });
  } catch (error) {
  }
});

export default router;
