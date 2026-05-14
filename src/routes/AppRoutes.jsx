import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;