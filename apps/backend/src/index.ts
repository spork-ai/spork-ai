import app from './app';
import dotenv from 'dotenv';

const PORT = 3000;

dotenv.config();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
