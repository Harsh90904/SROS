const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  reservationTime: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
  contactInfo: { type: String },
  specialRequest: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
