
import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import CartProvider from "./context/CartContext";

import WishlistProvider from "./context/WishlistContext";

import SmoothScroll from "./components/SmoothScroll";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <CartProvider>

      <WishlistProvider>

        {/* SMOOTH SCROLL */}

        <SmoothScroll />

        {/* MAIN APP */}

      
        
        <App />

      </WishlistProvider>

    </CartProvider>

  </React.StrictMode>
);