import request from 'supertest';
import app from '../app';

describe('Health Check Controller', () => {
    it('should return API health status', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'OK');
        expect(response.body).toHaveProperty('uptime');
        expect(response.body).toHaveProperty('memoryUsage');
        expect(response.body).toHaveProperty('database');
    });
});
