import request from 'supertest';
import app from '../app';

describe('Product Controller', () => {
    it('should get a product by code', async () => {
        const response = await request(app).get('/products/123456');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('code');
    });

    it('should return 404 for a non-existent product', async () => {
        const response = await request(app).get('/products/nonexistent');
        expect(response.status).toBe(404);
    });

    it('should update a product', async () => {
        const response = await request(app).put('/products/123456').send({
            product_name: 'Updated Product'
        });
        expect(response.status).toBe(200);
        expect(response.body.product_name).toBe('Updated Product');
    });

    it('should delete a product', async () => {
        const response = await request(app).delete('/products/123456');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Product moved to trash');
    });
});
