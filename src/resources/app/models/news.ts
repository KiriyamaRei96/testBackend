/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose, { Models, Schema, model } from 'mongoose';
import MongooseDelete, {
  SoftDeleteDocument,
  SoftDeleteModel,
} from 'mongoose-delete';

export interface Inew extends SoftDeleteDocument {
  name: string;
  des: string;
  type: 'tech' | 'sport' | 'techinfo';
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
const newSchema = new Schema<Inew>(
  {
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

    relate: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'new',
      default: [],
    },
  },
  { timestamps: true },
);
newSchema.pre('save', function (next) {
  this.increment();
  next();
});
newSchema.pre('findOne', function (next) {
  console.log('Pre Find One');
  next();
});
newSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedByType: String,
  overrideMethods: true,
});

const News = model<Inew>('new', newSchema);

export default News;
