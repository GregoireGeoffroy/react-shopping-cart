import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleRemove = (productId) => removeFromCart(productId);

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartQuantity(productId, newQuantity);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <div className="flex-1 ml-4">
              <h4 className="font-semibold">{item.title}</h4>
              <p>{item.price} $</p>
              <div className="flex items-center mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="mx-2 text-center w-12 border rounded"
                />
                <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
