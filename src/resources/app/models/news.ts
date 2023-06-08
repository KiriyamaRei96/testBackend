import mongoose, { Schema, model } from 'mongoose';

export interface Inew {
  name: string;
  des: string;
  type: 'tech' | 'sport' | 'techinfo';
  createdAt?: Date;
  updateddAt?: Date;
  relate?: string[];
}
const nameValidates = [
  {
    validator: function (v: any) {
      const re = /[!@#$%^&*(),.?":{}|<>]/g;

      return !re.test(v);
    },

    message: () => {
      return 'validate';
    },
  },
];
const newSchema = new Schema<Inew>({
  name: {
    type: String,
    required: [true, 'required'],
    max: [255, 'max'],
    min: [1, 'min'],
    validate: nameValidates,
    unique: true,
    trim: true,
  },
  des: { type: String, max: 600 },
  type: {
    type: String,
    required: [true, 'required'],
    default: 'techinfo',
    enum: {
      values: ['tech', 'sport', 'techinfo'],
      message: 'enum',
    },
  },
  createdAt: { type: Date, default: () => Date.now(), immutable: true },
  updateddAt: { type: Date, default: () => Date.now() },
  relate: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'new',
    default: [],
  },
});
newSchema.pre('save', function (next) {
  this.updateddAt = new Date(Date.now());
  next();
});
const News = model<Inew>('new', newSchema);

export default News;
