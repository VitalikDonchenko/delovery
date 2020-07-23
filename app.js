import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStoreGeneral from 'session-file-store';
import useErrorHandlers from './middleware/error-handlers.js';
import sessionLocals from './middleware/sessionLocals.js';

import indexRouter from './routes/indexRouter.js';
import offersRouter from './routes/offersRouter.js';
import userRouter from './routes/userRouter.js';
import courierRouter from './routes/courierRouter.js';
import { cookiesCleaner } from './middleware/sessionWorker.js'

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
    secret: 'kataus licom po klave',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24 * 365,
    },
  }),
);

app.use(sessionLocals);
app.use(cookiesCleaner);

app.use((req, res, next) => {
  // console.log(req.session)
  if (req.session.user) {
    res.locals.data = JSON.stringify(req.session.user);
  }
  next();
});

app.set('view engine', 'hbs');
app.use('/', indexRouter);
app.use('/offers', offersRouter);
app.use('/user', userRouter);
app.use('/courier', courierRouter);

useErrorHandlers(app);

app.listen(3000);
// export default app;
