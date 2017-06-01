/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(
      `
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great!
      `
    );
  }
});
