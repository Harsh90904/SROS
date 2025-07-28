const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  qrCodeUrl: { type: String },
  status: {
    type: String,
    enum: ['vacant', 'occupied'],
    default: 'vacant'
  }
}, { timestamps: true });

module.exports = mongoose.model('Table', TableSchema);
