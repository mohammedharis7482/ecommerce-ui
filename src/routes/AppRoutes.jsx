import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";

import Products from "../pages/Products";

import ProductDetails from "../pages/ProductDetails";

import Cart from "../pages/Cart";

import Wishlist from "../pages/Wishlist";

function AppRoutes() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}

      <Navbar />

      {/* ROUTES */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={<Products />}
        />

        {/* PRODUCT DETAILS */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* CART */}

        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* WISHLIST */}

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;