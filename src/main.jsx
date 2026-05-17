import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./index.css";

import CartProvider from "./context/CartContext";

import WishlistProvider from "./context/WishlistContext";

import ThemeProvider from "./context/ThemeContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <WishlistProvider>

          <CartProvider>

            <Toaster
              position="top-right"
            />

            <App />

          </CartProvider>

        </WishlistProvider>

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>
);