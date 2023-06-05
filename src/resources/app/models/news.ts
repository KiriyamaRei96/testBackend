import { Schema, model } from 'mongoose';

export interface Inew {
  name: string;
  des: string;
  type: 'tech' | 'sport' | 'techinfo';
  createdAt?: Date;
  updateddAt?: Date;
  img?: string;
}
const nameValidates = [
  {
    validator: function (v: any) {
      const re =
        /^[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]*/gm;
      return re.test(v);
    },

    message: (props: any) => {
      return 'text';
    },
  },
];
const newSchema = new Schema<Inew>({
  name: {
    type: String,
    required: true,
    max: [255, 'max'],
    min: [1, 'min'],
    validate: nameValidates,
  },
  des: { type: String, max: 600 },
  type: {
    type: String,
    required: true,
    default: 'techinfo',
    enum: ['tech', 'sport', 'techinfo'],
  },
  createdAt: { type: Date, default: () => Date.now() },
  updateddAt: { type: Date, default: () => Date.now() },
  img: { type: String },
});
const News = model<Inew>('new', newSchema);
export default News;
