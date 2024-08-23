import { Router } from 'express';
import { getHealthStatus } from '../controllers/HealthCheckController';

const router = Router();

router.get('/', getHealthStatus);

export default router;
