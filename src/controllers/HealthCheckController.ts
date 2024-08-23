import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const getHealthStatus = (req: Request, res: Response) => {
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();
    const dbState = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';

    res.json({
        status: 'OK',
        uptime: `${Math.floor(uptime / 60)} minutes`,
        memoryUsage: `${Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100} MB`,
        database: dbState,
        lastCronRun: 'Not implemented yet',
    });
};
