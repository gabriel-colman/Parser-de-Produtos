import express from 'express';
import productRoutes from './routes/productRoutes';
import healthRoutes from './routes/healthRoutes';
import connectDB from './config/database';

const app = express();

connectDB();
app.use(express.json());

app.use('/api', productRoutes);
app.use('/', healthRoutes);

export default app;
