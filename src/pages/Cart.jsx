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

  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );
  const shipping = cart.length > 0 ? 5.0 : 0;
  const tax = cart.length > 0 ? 18.0 : 0;
  const orderTotal = subtotal + shipping + tax;

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
              <div className="mb-10">
                <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
                  Shopping Cart
                </h2>
                <hr />
              </div>
              <div className="space-y-4">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-start"
                  >
                    <div className="flex gap-x-20">
                      <div>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-32 h-32 rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="capitalize text-col3 text-xl font-semibold">
                          {product.title}
                        </span>
                        <span className="text-col1 text-sm inline-block mt-2">
                          {product.company}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-normal text-col3">
                          Amount: {product.amount}
                        </span>
                        <button
                          onClick={() => handleRemoveFromCart(product.id)}
                          className="text-col6"
                        >
                          remove
                        </button>
                      </div>
                      <span className="text-col3 font-semibold">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-96 w-full mt-10">
                <div className="bg-col2 p-8 rounded-lg max-w-80 w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-normal text-col3">
                      Subtotal
                    </span>
                    <span className="text-xs font-semibold text-col3">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span className="text-xs font-normal text-col3">
                      Shipping
                    </span>
                    <span className="text-xs font-semibold text-col3">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span className="text-xs font-normal text-col3">Tax</span>
                    <span className="text-xs font-semibold text-col3">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between mt-4">
                    <span className="text-sm font-normal text-col3">
                      Order Total
                    </span>
                    <span className="text-sm font-semibold text-col3">
                      ${orderTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="bg-col3 rounded-lg h-12 text-col2 px-4 mt-8 text-base font-normal max-w-80 w-full">
                  PLEASE LOGIN
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
