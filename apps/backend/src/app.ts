import express from 'express';
import { Application } from 'express';
import generateRouter from './routes/generate-router';
import errorHandler from './middlewares/error-handler';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/generate', generateRouter);
app.use(errorHandler);

export default app;
