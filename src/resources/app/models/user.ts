/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose, { Models, Schema, model } from 'mongoose';
import MongooseDelete, {
  SoftDeleteDocument,
  SoftDeleteModel,
} from 'mongoose-delete';

export interface Iuser extends SoftDeleteDocument {
  name: string;
  email: string;
  password: string;
}
const nameValidates = [
  {
    validator: function (v: any) {
      const re = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g;

      return re.test(v);
    },

    message: () => {
      return 'validate';
    },
  },
];
const emailValidates = [
  {
    validator: function (v: any) {
      // eslint-disable-next-line no-useless-escape
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      return re.test(v);
    },

    message: () => {
      return 'validate';
    },
  },
];

const userSchema = new Schema<Iuser>(
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
    email: {
      type: String,
      required: [true, 'required'],
      max: [255, 'max'],
      min: [1, 'min'],
      validate: emailValidates,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'required'],
      max: [255, 'max'],
      min: [1, 'min'],
      trim: true,
    },
  },
  { timestamps: true },
);
userSchema.pre('save', function (next) {
  this.increment();
  next();
});
userSchema.pre('findOne', function (next) {
  console.log('Pre Find One');
  next();
});
userSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedByType: String,
  overrideMethods: true,
});

const Users = model<Iuser>('user', userSchema);

export default Users;
