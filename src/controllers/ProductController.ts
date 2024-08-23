import { Request, Response } from 'express';
import Product from '../models/Product';
import ProductService from '../services/ProductService';

export const getProduct = async (req: Request, res: Response) => {
    try {
        const product = await ProductService.getProductByCode(req.params.code);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getAllProducts(req.query.page as string);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = await ProductService.updateProduct(req.params.code, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deletedProduct = await ProductService.deleteProduct(req.params.code);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product moved to trash' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
