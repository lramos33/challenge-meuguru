import express from 'express';
import routes from './routes';
import middlewares from './middlewares';

const app = express();
app.use(express.json());

app.use('/users', routes.users);
app.use(middlewares.error);

export default app;
