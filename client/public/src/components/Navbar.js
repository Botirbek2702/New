import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Uy</Link>
      <Link to="/products">Mahsulotlar</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
