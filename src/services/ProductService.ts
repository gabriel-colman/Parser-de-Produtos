import Product, { IProduct } from '../models/Product';

class ProductService {
    public async getProductByCode(code: string): Promise<IProduct | null> {
        return await Product.findOne({ code });
    }

    public async getAllProducts(page: string = '1'): Promise<IProduct[]> {
        const limit = 20;
        const skip = (parseInt(page) - 1) * limit;
        return await Product.find().skip(skip).limit(limit);
    }

    public async updateProduct(code: string, updateData: Partial<IProduct>): Promise<IProduct | null> {
        return await Product.findOneAndUpdate({ code }, updateData, { new: true });
    }

    public async deleteProduct(code: string): Promise<IProduct | null> {
        return await Product.findOneAndUpdate({ code }, { status: 'trash' }, { new: true });
    }

    public async createProduct(productData: IProduct): Promise<IProduct> {
        const product = new Product(productData);
        return await product.save();
    }
}

export default new ProductService();
