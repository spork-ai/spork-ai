import { RequestHandler } from 'express';

const openaiController: RequestHandler = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            res.status(400).json({ error: 'Prompt is required' });
            return;
        }

        const response = {
            prompt,
            model: 'test-model',
            response: 'This is a mock response for testing purposes.'
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Error:', (error as Error).message);
        next(error);
    }
};

export default openaiController;
