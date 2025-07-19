import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: false,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
