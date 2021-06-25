const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
volumeInfo:{
  title: {
    type: String,
    required: true,
    unique: false,
  },
  subtitle: {
    type: String,
    required: false,
    unique: false,
  },
  authors: {
    type: Array,
    required: false,
    unique: false,
  },
  imageLinks: {
      type: Object,
      required: false,
      unique: false,
  },
  description: {
    type: String,
    required: true,
    unique: false,
  },
}});

module.exports =
  mongoose.models.books || mongoose.model('books', BookSchema);
