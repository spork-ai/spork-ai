# SporkAI

## Backend

### Local Testing

1. Change directory to `backend`.
   ```shell
   cd ./apps/backend
   ```
2. And the `.env` file directly under the `backend` directory.
3. Start the ExpressJS application
   ```shell
   npm run start
   ```
4. **Option 1 - Test using Postman**
    1. Draft a `POST` request on URL `http://localhost:3000/generate`
    2. Add form data with key: `prompt`, value: `I want to make an apple pie` (or any other prompt)
    3. Send the request and wait for the response.
5. **Option 2 - Test using `curl`**
   ```shell
   curl -X POST http://localhost:3000/ai -H "Content-Type: application/json" -d '{"prompt":"I want to make an apple pie"}'
   ```