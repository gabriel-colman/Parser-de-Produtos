import axios, { AxiosResponse } from 'axios';
import ProductService from './ProductService';
import ImportHistory from '../models/ImportHistory';

class SyncService {
    private filesListUrl = 'https://challenges.coode.sh/food/data/json/index.txt';

    public async syncData(): Promise<void> {
        try {
            const { data } = await axios.get(this.filesListUrl);
            const files = data.split('\n').filter((file: string) => file);

            for (const file of files) {
                await this.processFile(file);
            }
        } catch (error) {
            console.error('Error during sync:', error);
        }
    }

    private async processFile(fileName: string): Promise<void> {
        try {
            const { data } = await axios.get(`https://challenges.coode.sh/food/data/json/${fileName}`);
            const products = data.slice(0, 100); // Limitar a 100 produtos

            for (const product of products) {
                await ProductService.createProduct({
                    ...product,
                    imported_t: new Date(),
                    status: 'draft',
                });
            }

            await ImportHistory.create({
                date: new Date(),
                fileName,
                status: 'success',
                details: 'Imported successfully'
            });
        } catch (error) {
            await ImportHistory.create({
                date: new Date(),
                fileName,
                status: 'failure',
                details: (error as any).message,
            });
        }
    }
}

export default new SyncService();
