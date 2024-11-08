import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ product }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/order', { name, email, product, address });
      alert('Buyurtma qabul qilindi');
    } catch {
      alert('Xatolik');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ism" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Manzil" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button type="submit">Buyurtma berish</button>
    </form>
  );
};

export default OrderForm;
