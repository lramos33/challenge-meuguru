import express from 'express';
import routes from './routes';
import middlewares from './middlewares';

const app = express();
app.use(express.json());

// for localhost request
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/users', routes.users);
app.use(middlewares.error);

export default app;
