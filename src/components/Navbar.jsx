import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white">
        <Link to="/" className="mx-2 hover:text-gray-300">Home</Link>
        <Link to="/shop" className="mx-2 hover:text-gray-300">Shop</Link>
      </div>
      <div className="text-white">
        <Link to="/cart" className="mx-2 hover:text-gray-300">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
