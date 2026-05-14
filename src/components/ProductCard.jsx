import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

function ProductCard({ product }) {
  const { addToCart } =
    useContext(CartContext);

  const {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  const isInWishlist =
    wishlistItems.some(
      (item) => item.id === product.id
    );

  const handleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-300
      group
      border
      border-gray-100
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
          w-full
          h-72
          object-cover
          group-hover:scale-105
          transition
          duration-500
          "
        />

        {/* WISHLIST */}

        <button
          onClick={handleWishlist}
          className="
          absolute
          top-4
          right-4
          bg-white
          p-3
          rounded-full
          shadow-lg
          hover:scale-110
          transition
          "
        >
          {isInWishlist ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-black text-sm" />
          )}
        </button>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <p className="text-gray-400 text-sm mb-2">
          {product.category}
        </p>

        <h2
          className="
          text-xl
          font-bold
          text-gray-900
          mb-3
          "
        >
          {product.name}
        </h2>

        <div className="flex items-center gap-2 mb-4">
          <FaStar className="text-yellow-400 text-sm" />

          <span className="text-gray-600 text-sm">
            {product.rating}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">
            ${product.price}
          </p>

          <button
            onClick={() =>
              addToCart(product)
            }
            className="
            bg-black
            text-white
            px-5
            py-3
            rounded-xl
            text-sm
            font-semibold
            hover:bg-gray-800
            transition
            "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;