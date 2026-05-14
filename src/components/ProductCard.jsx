import { useContext, useState } from "react";

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
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  // HOVER IMAGE

  const [hovered, setHovered] =
    useState(false);

  const image =
    hovered && product.images[1]
      ? product.images[1]
      : product.images[0];

  // WISHLIST CHECK

  const isWishlisted =
    wishlistItems.some(
      (item) => item.id === product.id
    );

  // TOGGLE WISHLIST

  const handleWishlist = () => {

    if (isWishlisted) {

      removeFromWishlist(product.id);

    } else {

      addToWishlist(product);
    }
  };

  return (

    <div
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
      className="
      group
      bg-white
      rounded-[30px]
      overflow-hidden
      border
      border-gray-100
      hover:border-gray-200
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      transition-all
      duration-500
      flex
      flex-col
      h-full
      "
    >
      {/* IMAGE SECTION */}

      <div className="relative overflow-hidden">

        {/* PRODUCT LINK */}

        <Link to={`/product/${product.id}`}>

          <img
            loading="lazy"
            src={image}
            alt={product.name}
            className="
            w-full
            h-[360px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
            cursor-pointer
            "
          />

        </Link>

        {/* WISHLIST */}

        <button
          onClick={handleWishlist}
          className="
          absolute
          top-5
          right-5
          w-12
          h-12
          rounded-full
          bg-white/90
          backdrop-blur-md
          flex
          items-center
          justify-center
          shadow-md
          hover:scale-110
          transition
          z-20
          "
        >
          {isWishlisted ? (

            <FaHeart className="text-red-500 text-lg" />

          ) : (

            <FaRegHeart className="text-black text-lg" />

          )}
        </button>

        {/* ADD TO CART BUTTON */}

        <div
          className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          translate-y-10
          opacity-0
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-500
          z-20
          "
        >
          <button
            onClick={() =>
              addToCart(product)
            }
            className="
            bg-black
            text-white
            px-7
            py-3
            rounded-full
            text-sm
            font-semibold
            tracking-wide
            hover:scale-105
            transition
            "
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
        p-7
        flex
        flex-col
        flex-grow
        "
      >
        {/* CATEGORY */}

        <p
          className="
          text-[11px]
          uppercase
          tracking-[4px]
          text-gray-400
          mb-4
          "
        >
          {product.category}
        </p>

        {/* TITLE */}

        <Link to={`/product/${product.id}`}>

          <h3
            className="
            text-[26px]
            font-bold
            text-gray-900
            leading-tight
            mb-4
            min-h-[64px]
            hover:text-black
            transition
            cursor-pointer
            "
          >
            {product.name}
          </h3>

        </Link>

        {/* DESCRIPTION */}

        <p
          className="
          text-gray-500
          text-[15px]
          leading-relaxed
          mb-8
          min-h-[72px]
          "
        >
          {product.description.slice(0, 80)}...
        </p>

        {/* BOTTOM */}

        <div
          className="
          mt-auto
          flex
          items-end
          justify-between
          "
        >
          {/* PRICE */}

          <div>

            <h4
              className="
              text-3xl
              font-black
              text-black
              mb-1
              "
            >
              ${product.price}
            </h4>

            <p
              className="
              text-sm
              text-green-600
              font-medium
              "
            >
              Free Shipping
            </p>
          </div>

          {/* RATING */}

          <div
            className="
            flex
            items-center
            gap-2
            bg-gray-100
            px-4
            py-2
            rounded-full
            "
          >
            <FaStar className="text-yellow-400 text-sm" />

            <span
              className="
              text-sm
              font-semibold
              "
            >
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;