// import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
// import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

const app = express();
app.server = http.createServer(app);

// middlewere

// passport config

// api routes v1
app.use('/v1', routes)

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;

