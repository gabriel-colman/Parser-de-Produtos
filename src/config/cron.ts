import cron from 'cron';
import SyncService from '../services/SyncService';

// Agendando a execução diária do cron job às 2:00 AM
const job = new cron.CronJob('0 0 2 * * *', async () => {
    console.log('CRON job started: Synchronizing Open Food Facts data');
    await SyncService.syncData();
    console.log('CRON job completed');
});

export const startCronJob = () => {
    job.start();
    console.log('CRON job scheduled');
};
