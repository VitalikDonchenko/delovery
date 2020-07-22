import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStoreGeneral from 'session-file-store';
import useErrorHandlers from './middleware/error-handlers.js';

import indexRouter from './routes/indexRouter.js';
import offersRouter from './routes/offersRouter.js';
import userRouter from './routes/userRouter.js';
import courierRouter from './routes/courierRouter.js';
import ordersRouter from './routes/ordersRouter.js';

const FileStore = FileStoreGeneral(session);

const app = express();

mongoose.connect('mongodb://localhost:27017/delovery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use(
  session({
    store: new FileStore(),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  }),
);

app.set('view engine', 'hbs');

app.use('/', indexRouter);
app.use('/offers', offersRouter);
app.use('/orders', ordersRouter);
app.use('/user', userRouter);
app.use('/courier', courierRouter);

useErrorHandlers(app);

app.listen(3000);
// export default app;
