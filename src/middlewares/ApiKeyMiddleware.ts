import { Request, Response, NextFunction } from 'express';

const ApiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('x-api-key');
    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};

export default ApiKeyMiddleware;
