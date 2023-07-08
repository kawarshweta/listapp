import React, { useState } from "react";

const Cart = () => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(0);

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
          price: (
            parseFloat(item.price) - parseFloat(item.price) / item.quantity
          ).toFixed(2),
        };
      }
      return item;
    });

    setCart(updatedCart);

    const newTotal = updatedCart.reduce(
      (accumulator, item) => accumulator + parseFloat(item.price),
      0
    );
    setTotal(newTotal);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
          price: (
            parseFloat(item.price) + parseFloat(item.price) / item.quantity
          ).toFixed(2),
        };
      }
      return item;
    });

    setCart(updatedCart);

    const newTotal = updatedCart.reduce(
      (accumulator, item) => accumulator + parseFloat(item.price),
      0
    );
    setTotal(newTotal);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  
    const updatedLocalStorageCart = updatedCart.length > 0 ? updatedCart : null;
    localStorage.setItem("cart", JSON.stringify(updatedLocalStorageCart));
  
    const newTotal = updatedCart.reduce(
      (accumulator, item) => accumulator + parseFloat(item.price),
      0
    );
    setTotal(newTotal);
  };
  

  return (
    <div className="h-auto drop-shadow-sm m-11">
      <div className="flex justify-between h-14 bg-slate-300 p-4 font-bold">
        <h2>Shopping Cart</h2>
        <h2>{cart.length} Items</h2>
      </div>

      <div className="flex justify-between mt-3 p-3 font-medium">
        <h1>PRODUCT DETAILS</h1>
        <h1 className="ml-52">PRICE</h1>
        <h1>QUANTITY</h1>
        <h1>TOTAL</h1>
      </div>

      {cart.map((item) => (
        <div className="flex drop-shadow-md mb-3 h-28 border-b-4" key={item.id}>
          <img
            className="w-14 h-14 m-3 inlin"
            src={item.image}
            alt={item.title}
          />
          <div className="inline-block capitalize mt-3 ml-4 w-80">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-red-500">{item.category}</p>
          </div>
          <p className="mt-3 ml-60">${parseFloat(item.price).toFixed(2)}</p> {/* Limit to 2 decimal places */}
          <div className="flex items-center mt-3 mb-16 ml-[305]">
            <button
              className="text-red-500 font-bold mr-2"
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>
            <p>{item.quantity || 1}</p>
            <button
              className="text-green-500 font-bold ml-2"
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
            <button
              className="text-red-500 font-bold ml-32"
              onClick={() => removeItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <h2 className="flex justify-end pt-3 font-medium text-xl">
        Total: ${parseFloat(total).toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;
