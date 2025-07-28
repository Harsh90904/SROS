const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  paymentMethod: { type: String, enum:['cashondelivery', 'creditcard', 'paypal'] },
  transactionId: String, 
  amount: Number,
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  paymentDate: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
