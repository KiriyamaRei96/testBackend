import mongoose from 'mongoose';
async function connectDB() {
  try {
    await mongoose
      .connect('mongodb://127.0.0.1:27017/test_backend_dev')
      .then(() => console.log('Connected!'));
  } catch (err) {
    console.log(err);
  }
}
export default connectDB;
