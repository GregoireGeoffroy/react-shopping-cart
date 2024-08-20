import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => addToCart(product, quantity);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mx-auto mb-4" />
      <p className="text-gray-700 mb-4">{product.price} $</p>
      <div className="flex items-center justify-center mb-4">
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="mx-2 text-center w-12 border rounded"
        />
        <button className="px-2 py-1 bg-gray-200 rounded" onClick={handleIncrement}>+</button>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
