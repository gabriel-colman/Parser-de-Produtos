import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    code: string;
    product_name: string;
    imported_t: Date;
    status: 'draft' | 'trash' | 'published';
    [key: string]: any; // Permitir campos adicionais
}

const ProductSchema: Schema = new Schema({
    code: { type: String, required: true, unique: true },
    product_name: { type: String, required: true },
    imported_t: { type: Date, required: true },
    status: { type: String, enum: ['draft', 'trash', 'published'], required: true },
    // Outros campos dinâmicos podem ser adicionados aqui
});

export default mongoose.model<IProduct>('Product', ProductSchema);
