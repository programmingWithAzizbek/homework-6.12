import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route
        path="/productsdetails/:id"
        element={<ProductsDetails></ProductsDetails>}
      ></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
    </Routes>
  );
}

export default App;
