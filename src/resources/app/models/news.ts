import { Schema, model } from 'mongoose';

export interface Inew {
  name: string;
  des: string;
  createdAt?: Date;
  updateddAt?: Date;
  img?: string;
}
const newSchema = new Schema<Inew>({
  name: { type: String, required: true, max: 255 },
  des: { type: String, required: true, max: 600 },
  createdAt: { type: Date, default: Date.now() },
  updateddAt: { type: Date, default: Date.now() },
  img: { type: String },
});
const News = model<Inew>('new', newSchema);
export default News;
