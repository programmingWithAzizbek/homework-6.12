import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Cart() {
  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div>
            <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
              Your Cart Is Empty
            </h2>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
