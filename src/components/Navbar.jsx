import { Link, useLocation } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import {
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

function Navbar() {

  const location = useLocation();

  const { cartItems } =
    useContext(CartContext);

  const { wishlistItems } =
    useContext(WishlistContext);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Products",
      path: "/products",
    },

    {
      name: "Wishlist",
      path: "/wishlist",
    },

    {
      name: "Cart",
      path: "/cart",
    },
  ];

  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      backdrop-blur-lg
      border-b
      border-gray-200
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        lg:px-8
        py-5
        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}

        <Link to="/">

          <h1
            className="
            text-4xl
            font-black
            tracking-tight
            text-black
            "
          >
            ShopEase
          </h1>

        </Link>

        {/* NAV LINKS */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-10
          "
        >
          {navLinks.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              className={`
                relative
                text-[16px]
                font-semibold
                transition
                duration-300
                
                ${
                  location.pathname === link.path
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              {link.name}

              {/* ACTIVE LINE */}

              {location.pathname === link.path && (

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-full
                  h-[3px]
                  bg-black
                  rounded-full
                  "
                />

              )}

            </Link>

          ))}
        </nav>

        {/* RIGHT ICONS */}

        <div
          className="
          flex
          items-center
          gap-6
          "
        >
          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="
            relative
            text-2xl
            text-gray-700
            hover:text-black
            transition
            "
          >
            <FaHeart />

            {wishlistItems.length > 0 && (

              <span
                className="
                absolute
                -top-2
                -right-3
                bg-red-500
                text-white
                text-[11px]
                font-bold
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                "
              >
                {wishlistItems.length}
              </span>

            )}
          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="
            relative
            text-2xl
            text-gray-700
            hover:text-black
            transition
            "
          >
            <FaShoppingCart />

            {cartItems.length > 0 && (

              <span
                className="
                absolute
                -top-2
                -right-3
                bg-black
                text-white
                text-[11px]
                font-bold
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                "
              >
                {cartItems.length}
              </span>

            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;