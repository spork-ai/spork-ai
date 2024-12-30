import { RequestHandler } from 'express';
import { OpenAI } from 'openai';

const openaiController: RequestHandler = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            res.status(400).json({ error: 'Prompt is required' });
            return;
        }

        const openaiClient: OpenAI = new OpenAI();

        const response = await openaiClient.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }]
        });

        res.status(200).json(response.choices.at(0)!.message.content);
    } catch (error) {
        console.error('Error:', (error as Error).message);
        next(error);
    }
};

export default openaiController;
