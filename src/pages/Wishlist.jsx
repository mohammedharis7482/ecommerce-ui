import { useContext } from "react";

import {
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { WishlistContext } from "../context/WishlistContext";

import ProductCard from "../components/ProductCard";

import Footer from "../components/Footer";

function Wishlist() {

  const { wishlistItems } =
    useContext(WishlistContext);

  return (

    <div className="bg-[#f7f7f7] min-h-screen pt-24 sm:pt-28">

      {/* HERO */}

      <section
        className="
        px-4
        sm:px-6
        mb-16
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          "
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-gray-400
            text-xs
            sm:text-sm
            mb-4
            "
          >
            Saved Collection
          </p>

          <h1
            className="
            text-4xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            mb-6
            "
          >
            Your Wishlist
          </h1>

          <p
            className="
            text-gray-500
            text-base
            sm:text-xl
            max-w-2xl
            leading-relaxed
            "
          >
            Save your favorite premium
            products and explore them
            anytime with a modern luxury
            shopping experience.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section
        className="
        px-4
        sm:px-6
        pb-28
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          "
        >
          {/* EMPTY STATE */}

          {wishlistItems.length === 0 ? (

            <div
              className="
              bg-white
              rounded-[32px]
              border
              border-gray-100
              shadow-sm
              p-10
              sm:p-20
              text-center
              "
            >
              {/* ICON */}

              <div
                className="
                w-24
                h-24
                mx-auto
                rounded-full
                bg-red-50
                text-red-500
                flex
                items-center
                justify-center
                text-4xl
                mb-8
                "
              >
                <FaHeart />
              </div>

              {/* TITLE */}

              <h2
                className="
                text-3xl
                sm:text-5xl
                font-black
                mb-6
                "
              >
                Wishlist Is Empty
              </h2>

              {/* TEXT */}

              <p
                className="
                text-gray-500
                text-base
                sm:text-lg
                max-w-2xl
                mx-auto
                leading-relaxed
                mb-10
                "
              >
                Explore premium collections
                and save your favorite
                products to build your
                luxury shopping wishlist.
              </p>

              {/* BUTTON */}

              <Link to="/products">

                <button
                  className="
                  bg-black
                  hover:bg-gray-900
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  inline-flex
                  items-center
                  gap-3
                  hover:scale-105
                  "
                >
                  Explore Products

                  <FaArrowRight />
                </button>

              </Link>
            </div>

          ) : (

            <>
              {/* TOP BAR */}

              <div
                className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                mb-12
                "
              >
                <h2
                  className="
                  text-2xl
                  sm:text-3xl
                  font-black
                  "
                >
                  Saved Products
                </h2>

                <p
                  className="
                  text-gray-500
                  "
                >
                  {
                    wishlistItems.length
                  } Products Saved
                </p>
              </div>

              {/* PRODUCTS GRID */}

              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
                sm:gap-8
                "
              >
                {wishlistItems.map(
                  (product) => (

                    <ProductCard
                      key={product.id}
                      product={product}
                    />

                  )
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Wishlist;