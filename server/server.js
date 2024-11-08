const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routerlarni ulash
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);

// MongoDB bilan bog'lanish
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDBga ulandi'))
.catch(err => console.error('MongoDBga ulanib bo\'lmadi:', err));

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishlamoqda`));
