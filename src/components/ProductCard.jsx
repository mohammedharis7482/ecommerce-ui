import { useContext } from "react";

import { Link } from "react-router-dom";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  const {
    wishlistItems = [],
    addToWishlist,
    removeFromWishlist,
  } = useContext(
    WishlistContext
  );

  // WISHLIST CHECK

  const isWishlisted =
    wishlistItems.some(
      (item) =>
        item.id === product.id
    );

  // TOGGLE WISHLIST

  const handleWishlist = () => {

    if (isWishlisted) {

      removeFromWishlist(
        product.id
      );

    } else {

      addToWishlist(product);
    }
  };

  return (

    <div
      className="
      group
      bg-white
      rounded-[28px]
      overflow-hidden
      border
      border-gray-100
      hover:border-gray-200
      hover:shadow-2xl
      transition-all
      duration-500
      flex
      flex-col
      h-full
      "
    >
      {/* IMAGE SECTION */}

      <div
        className="
        relative
        bg-[#f6f6f6]
        overflow-hidden
        p-5
        sm:p-7
        md:p-8
        flex
        items-center
        justify-center
        h-[260px]
        sm:h-[320px]
        md:h-[360px]
        "
      >
        {/* CATEGORY */}

        <div
          className="
          absolute
          top-4
          left-4
          z-10
          "
        >
          <span
            className="
            bg-white/90
            backdrop-blur-md
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[3px]
            text-gray-600
            font-semibold
            px-4
            py-2
            rounded-full
            shadow-sm
            "
          >
            {product.category}
          </span>
        </div>

        {/* WISHLIST */}

        <button
          onClick={handleWishlist}
          className="
          absolute
          top-4
          right-4
          z-10
          w-10
          h-10
          sm:w-11
          sm:h-11
          rounded-full
          bg-white
          shadow-md
          flex
          items-center
          justify-center
          hover:scale-110
          transition-all
          duration-300
          "
        >
          {isWishlisted ? (

            <FaHeart
              className="
              text-red-500
              text-sm
              sm:text-base
              "
            />

          ) : (

            <FaRegHeart
              className="
              text-black
              text-sm
              sm:text-base
              "
            />
          )}
        </button>

        {/* PRODUCT IMAGE */}

        <Link
          to={`/product/${product.id}`}
          className="
          w-full
          h-full
          flex
          items-center
          justify-center
          "
        >
          <img
            src={
              product.images?.[0]
            }
            alt={product.name}
            className="
            max-h-full
            object-contain
            group-hover:scale-105
            transition-transform
            duration-500
            "
          />
        </Link>
      </div>

      {/* CONTENT */}

      <div
        className="
        p-5
        sm:p-6
        flex
        flex-col
        flex-1
        "
      >
        {/* PRODUCT NAME */}

        <Link
          to={`/product/${product.id}`}
        >
          <h3
            className="
            text-lg
            sm:text-xl
            font-bold
            text-gray-900
            leading-snug
            mb-3
            hover:text-black
            transition
            min-h-[56px]
            line-clamp-2
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}

        <p
          className="
          text-sm
          sm:text-[15px]
          text-gray-500
          leading-relaxed
          mb-5
          line-clamp-2
          "
        >
          {product.description}
        </p>

        {/* RATING */}

        <div
          className="
          flex
          items-center
          gap-2
          mb-6
          "
        >
          <FaStar
            className="
            text-yellow-400
            text-sm
            "
          />

          <span
            className="
            text-sm
            font-semibold
            text-gray-700
            "
          >
            {product.rating}
          </span>

          <span
            className="
            text-sm
            text-gray-400
            "
          >
            Premium Rating
          </span>
        </div>

        {/* PRICE + BUTTON */}

        <div
          className="
          mt-auto
          flex
          items-center
          justify-between
          gap-3
          "
        >
          {/* PRICE */}

          <div>

            <h4
              className="
              text-2xl
              sm:text-3xl
              font-black
              text-black
              "
            >
              ${product.price}
            </h4>

            <p
              className="
              text-xs
              sm:text-sm
              text-green-600
              font-medium
              mt-1
              "
            >
              Free Shipping
            </p>
          </div>

          {/* BUTTON */}

          <button
            onClick={() =>
              addToCart(product)
            }
            className="
            bg-black
            hover:bg-gray-900
            text-white
            text-sm
            sm:text-base
            px-5
            sm:px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            whitespace-nowrap
            "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;