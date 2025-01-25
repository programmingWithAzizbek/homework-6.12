import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.jsx";
import Header from "../components/Header.jsx";

function Cart() {
  const { cart, updateCart } = useCart();

  useEffect(() => {}, [cart]);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20">
          {cart.length === 0 ? (
            <div>
              <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
                Your Cart Is Empty
              </h2>
              <hr />
            </div>
          ) : (
            <div>
              <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
                Your Cart
              </h2>
              <div className="space-y-4">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-cover"
                      />
                      <span>{product.title}</span>
                    </div>
                    <span>${product.price}</span>
                    <span>Amount: {product.amount}</span>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
