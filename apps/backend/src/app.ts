import express from 'express';
import { Application } from 'express';
import openaiApiRouter from './routes/openai-api';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/generate', openaiApiRouter);

export default app;
