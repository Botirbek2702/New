import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner title="Super Aksiya!" description="Har kuni chegirmalar!" />
        <Routes>
          <Route path="/" element={<div>Bosh sahifa</div>} />
          <Route path="/products" element={<div>Mahsulotlar</div>} />
          <Route path="/order" element={<OrderForm product="Kompyuter" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
