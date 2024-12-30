import { Router } from 'express';
import openaiController from '../controllers/openai-controller';

const openaiApiRouter: Router = Router();

openaiApiRouter.post('/', openaiController);

export default openaiApiRouter;
