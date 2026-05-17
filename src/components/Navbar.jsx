import { Link, useLocation } from "react-router-dom";

import { useContext, useState } from "react";

import {
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { cartItems } =
    useContext(CartContext);

  const { wishlistItems } =
    useContext(WishlistContext);

  const {
    darkMode,
    toggleDarkMode,
  } = useContext(ThemeContext);

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
      dark:bg-[#0f0f0f]/90
      backdrop-blur-xl
      border-b
      border-gray-200
      dark:border-white/10
      transition-all
      duration-300
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        h-[80px]
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
            dark:text-white
            transition
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
                transition
                
                ${
                  location.pathname ===
                  link.path
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
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
                  h-[2px]
                  bg-black
                  dark:bg-white
                  rounded-full
                  "
                />

              )}
            </Link>

          ))}
        </nav>

        {/* RIGHT SECTION */}

        <div
          className="
          flex
          items-center
          gap-5
          "
        >
          {/* DARK MODE */}

          <button
            onClick={toggleDarkMode}
            className="
            text-xl
            text-black
            dark:text-white
            transition
            hover:scale-110
            "
          >
            {darkMode ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}
          </button>

          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="
            relative
            text-xl
            text-black
            dark:text-white
            transition
            hover:scale-110
            "
          >
            <FaHeart />

            {wishlistItems.length >
              0 && (

              <span
                className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-red-500
                text-white
                text-[10px]
                font-bold
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
            text-xl
            text-black
            dark:text-white
            transition
            hover:scale-110
            "
          >
            <FaShoppingCart />

            {cartItems.length >
              0 && (

              <span
                className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-black
                dark:bg-white
                dark:text-black
                text-white
                text-[10px]
                font-bold
                flex
                items-center
                justify-center
                "
              >
                {cartItems.length}
              </span>

            )}
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            className="
            md:hidden
            text-2xl
            text-black
            dark:text-white
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

      {menuOpen && (

        <div
          className="
          md:hidden
          bg-white
          dark:bg-[#111111]
          border-t
          border-gray-200
          dark:border-white/10
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
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }
              `}
            >
              {link.name}
            </Link>

          ))}
        </div>

      )}
    </header>
  );
}

export default Navbar;