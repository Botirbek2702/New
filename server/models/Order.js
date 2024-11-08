const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: String,
  customerName: String,
  email: String,
  address: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
