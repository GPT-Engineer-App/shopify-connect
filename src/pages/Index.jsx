import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Welcome to Our Ecommerce Site</h1>
        <p className="text-center">
          <Link to="/products" className="text-blue-500">View Products</Link>
        </p>
        <p className="text-center">
          <Link to="/about" className="text-blue-500">About Us</Link>
        </p>
      </div>
    </div>
  );
};

export default Index;