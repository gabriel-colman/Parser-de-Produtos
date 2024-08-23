import mongoose, { Document, Schema } from 'mongoose';

export interface IImportHistory extends Document {
    date: Date;
    fileName: string;
    status: 'success' | 'failure';
    details: string;
}

const ImportHistorySchema: Schema = new Schema({
    date: { type: Date, required: true },
    fileName: { type: String, required: true },
    status: { type: String, enum: ['success', 'failure'], required: true },
    details: { type: String },
});

export default mongoose.model<IImportHistory>('ImportHistory', ImportHistorySchema);
