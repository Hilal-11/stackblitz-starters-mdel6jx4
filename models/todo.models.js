import mongoose, { mongo } from 'mongoose';
const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTodo',
      },
      // Array of Sub Todos
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', TodoSchema);
