const express = require('express');
const nodemailer = require('nodemailer');
const Order = require('../models/Order');
const router = express.Router();

router.post('/order', async (req, res) => {
  const { product, customerName, email, address } = req.body;

  const order = new Order({ product, customerName, email, address });
  await order.save();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Yangi buyurtma',
    text: `Buyurtma haqida: ${product}, Mijoz: ${customerName}, Manzil: ${address}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ message: 'Xatolik' });
    res.status(200).json({ message: 'Buyurtma qabul qilindi' });
  });
});

module.exports = router;
