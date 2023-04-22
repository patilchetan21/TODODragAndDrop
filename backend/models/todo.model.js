const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  checked: { type: Boolean, required: true },
  position: { type: Number, required: true }
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
