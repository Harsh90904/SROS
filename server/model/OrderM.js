const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  items: [{
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: { type: Number, default: 1 }
  }],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ['placed', 'preparing', 'ready', 'served'],
    default: 'placed'
  },
  paid: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
