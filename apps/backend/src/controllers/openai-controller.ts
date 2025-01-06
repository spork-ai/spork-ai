import { RequestHandler } from 'express';
import { OpenAI } from 'openai';
import { ChatCompletion } from 'openai/src/resources/chat/completions';
import { HTTPError } from '../middlewares/error-handler';

const OPENAI_MODEL = 'gpt-4o-mini';

const openaiController: RequestHandler = async (req, res, next) => {
    const { prompt } = req.body;
    if (!prompt || prompt.trim().length === 0) {
        next(new HTTPError(400, 'Prompt is empty'));
    }

    if (!process.env.OPEAI_API_KEY) {
        next(new HTTPError(500, 'OpenAI API key not found'));
    }

    try {
        const openaiClient: OpenAI = new OpenAI();

        const response: ChatCompletion =
            await openaiClient.chat.completions.create({
                model: OPENAI_MODEL,
                messages: [{ role: 'user', content: prompt }]
            });

        if (response.choices.length === 0) {
            next(new HTTPError(500, 'No response from OpenAI'));
        }

        res.status(200).json(response.choices.at(0)!.message.content);
    } catch (error) {
        console.error('Error:', (error as Error).message);
        next(error);
    }
};

export default openaiController;
