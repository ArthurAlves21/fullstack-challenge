const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    unique: false,
  }
});

module.exports =
  mongoose.models.test || mongoose.model('test', BookSchema);
