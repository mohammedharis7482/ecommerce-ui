import { Link, useLocation } from "react-router-dom";

import { useContext, useState } from "react";

import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

function Navbar() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

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
      backdrop-blur-xl
      border-b
      border-gray-200/70
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}

        <Link to="/">

          <h1
            className="
            text-2xl
            sm:text-3xl
            font-black
            tracking-tight
            text-black
            "
          >
            ShopEase
          </h1>

        </Link>

        {/* DESKTOP NAV */}

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
                text-[15px]
                font-semibold
                transition-all
                duration-300

                ${
                  location.pathname ===
                  link.path
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              {link.name}

              {location.pathname ===
                link.path && (

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

        {/* RIGHT */}

        <div
          className="
          flex
          items-center
          gap-3
          sm:gap-5
          "
        >
          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="
            relative
            text-xl
            sm:text-2xl
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
                -right-2
                bg-red-500
                text-white
                text-[10px]
                font-bold
                min-w-[18px]
                h-[18px]
                rounded-full
                flex
                items-center
                justify-center
                px-1
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
            text-xl
            sm:text-2xl
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
                -right-2
                bg-black
                text-white
                text-[10px]
                font-bold
                min-w-[18px]
                h-[18px]
                rounded-full
                flex
                items-center
                justify-center
                px-1
                "
              >
                {cartItems.length}
              </span>

            )}
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
            md:hidden
            w-11
            h-11
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
            text-lg
            "
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          bg-white

          ${
            menuOpen
              ? "max-h-[400px] border-t border-gray-100"
              : "max-h-0"
          }
        `}
      >
        <div
          className="
          px-6
          py-6
          flex
          flex-col
          gap-6
          "
        >
          {navLinks.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className={`
                text-lg
                font-semibold
                transition

                ${
                  location.pathname ===
                  link.path
                    ? "text-black"
                    : "text-gray-500"
                }
              `}
            >
              {link.name}
            </Link>

          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;