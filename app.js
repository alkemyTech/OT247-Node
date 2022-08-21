const createHttpError = require('http-errors');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiTimeout = 200000;
app.use((req, res, next) => {
  req.setTimeout(apiTimeout, () => {
    const httpError = createHttpError(
      408,
      `[${req.method} ${req.url}]: Request timeout`,
    );
    next(httpError);
  });

  res.setTimeout(apiTimeout, () => {
    const httpError = createHttpError(
      503,
      `[${req.method} ${req.url}]: Service unavailable`,
    );
    next(httpError);
  });
  next();
});

app.use(helmet());

app.use('/', indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
