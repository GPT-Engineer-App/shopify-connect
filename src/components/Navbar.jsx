import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/products" className="text-white">Products</Link>
        <Link to="/about" className="text-white">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;