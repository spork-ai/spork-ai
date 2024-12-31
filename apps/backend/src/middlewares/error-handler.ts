import { Request, Response } from 'express';

const DEFAULT_ERROR_CODE = 500;
const DEFAULT_ERROR_MESSAGE = 'Internal Server Error';

export class HTTPError extends Error {
    readonly statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }
}

const errorHandler = (err: HTTPError | Error, req: Request, res: Response) => {
    console.error(err);

    const statusCode =
        err instanceof HTTPError ? err.statusCode : DEFAULT_ERROR_CODE;
    const message = err.message || DEFAULT_ERROR_MESSAGE;

    res.status(statusCode).json({ error: message });
};

export default errorHandler;
