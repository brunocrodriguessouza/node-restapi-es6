import express from 'express';

import config from '../config';

import initializeDb from '../db';

import middleware from '../middleware';

const router = express();

// connect to db
initializeDb(db => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)

});

export default router;