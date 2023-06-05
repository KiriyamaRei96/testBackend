import { Schema, model } from 'mongoose';

export interface Inew {
  name: string;
  des: string;
  num: number;
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
      return 'Tên chỉ bao gồm chữ hoa và chữ thường.';
    },
  },
];
const newSchema = new Schema<Inew>({
  name: {
    type: String,
    required: true,
    max: [255, 'Tên phải ít hơn 255 ký tự'],
    min: [1, 'Tên phải nhiều hơn 1 ký tự'],
    validate: nameValidates,
  },
  num: { type: Number, required: [true, 'trường này không được bỏ trống'] },
  des: { type: String, max: 600 },
  createdAt: { type: Date, default: () => Date.now() },
  updateddAt: { type: Date, default: () => Date.now() },
  img: { type: String },
});
const News = model<Inew>('new', newSchema);
export default News;
