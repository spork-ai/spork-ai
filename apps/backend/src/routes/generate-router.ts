/**
 * Route path: /generate
 */
import { Router } from 'express';
import openaiController from '../controllers/openai-controller';

const generateRouter: Router = Router();

generateRouter.post('/', openaiController);

export default generateRouter;
