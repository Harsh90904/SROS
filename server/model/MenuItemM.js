const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., Starter, Main, Dessert
  image: String,
  available: { type: Boolean, default: true }
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = MenuItem;
