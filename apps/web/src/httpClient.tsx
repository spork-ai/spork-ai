import axios from 'axios';

export async function generateRecipe(body: string): Promise<void> {
    try {
        const response = await axios.post('http://localhost:3000/generate', {
            prompt: body
        });
        console.log('response', response);
    } catch (error) {
        console.error('Error while generating recipes:', error);
    }
}
