import axios from 'axios';

export async function generateRecipe(prompt: string): Promise<void> {
    try {
        const response = await axios.post('http://localhost:3000/generate', {
            prompt: prompt
        });
        console.log('response', response);
    } catch (error) {
        console.error('Unexpected error:', error);
    }
}
