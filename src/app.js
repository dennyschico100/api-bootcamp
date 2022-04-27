require('dotenv').config();
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const SecretRoutes = require('./routes/secret');
const ShortUrlRoutes = require('./routes/ShortUrl');
const WordRoutes = require('./routes/Word');
const morgan = require('morgan');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

mongoose
  .connect(
    'mongodb+srv://dennysfcg:cordova1@cluster0.dppd5.mongodb.net/api?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log(' db is connected');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.set('PORT', process.env.PORT || 3000);

app.use('/api/secret', SecretRoutes);
app.use('/api/short-url', ShortUrlRoutes);
app.use('/api/words', WordRoutes);
app.get('/', (_, res) => {
  res.json('OK');
});
//app.use('/api/users', UserRoutes);
module.exports = app;
