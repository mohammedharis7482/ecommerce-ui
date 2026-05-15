import { useParams } from "react-router-dom";

import { useContext, useState } from "react";

import {
  FaStar,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

import { WishlistContext } from "../context/WishlistContext";

import Footer from "../components/Footer";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } =
    useContext(CartContext);

  const {
    addToWishlist,
    removeFromWishlist,
    wishlistItems,
  } = useContext(WishlistContext);

  const [quantity, setQuantity] =
    useState(1);

  const [mainImage, setMainImage] =
    useState(product?.images?.[0]);

  if (!product) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        text-3xl
        font-bold
        "
      >
        Product Not Found
      </div>

    );
  }

  // WISHLIST CHECK

  const isWishlisted =
    wishlistItems.some(
      (item) => item.id === product.id
    );

  // HANDLE WISHLIST

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
      bg-[#f7f7f7]
      min-h-screen
      pt-24
      sm:pt-28
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-10
        sm:py-16
        grid
        lg:grid-cols-2
        gap-10
        lg:gap-16
        "
      >
        {/* LEFT SIDE */}

        <div>

          {/* MAIN IMAGE */}

          <div
            className="
            bg-white
            rounded-[30px]
            overflow-hidden
            shadow-sm
            border
            border-gray-100
            mb-5
            "
          >
            <img
              src={mainImage}
              alt={product.name}
              className="
              w-full
              h-[420px]
              sm:h-[550px]
              lg:h-[700px]
              object-cover
              transition-all
              duration-500
              "
            />
          </div>

          {/* THUMBNAILS */}

          <div
            className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            "
          >
            {product.images.map(
              (image, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setMainImage(image)
                  }
                  className={`
                    min-w-[90px]
                    w-[90px]
                    h-[90px]
                    sm:w-[110px]
                    sm:h-[110px]
                    rounded-2xl
                    overflow-hidden
                    border-2
                    transition

                    ${
                      mainImage === image
                        ? "border-black"
                        : "border-transparent"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt="Thumbnail"
                    className="
                    w-full
                    h-full
                    object-cover
                    "
                  />
                </button>

              )
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
          flex
          flex-col
          justify-center
          "
        >
          {/* CATEGORY */}

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
            {product.category}
          </p>

          {/* TITLE */}

          <h1
            className="
            text-3xl
            sm:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            text-black
            mb-5
            "
          >
            {product.name}
          </h1>

          {/* RATING */}

          <div
            className="
            flex
            items-center
            gap-3
            mb-6
            "
          >
            <FaStar
              className="
              text-yellow-400
              text-lg
              "
            />

            <span
              className="
              text-lg
              font-semibold
              "
            >
              {product.rating}
            </span>

            <span
              className="
              text-gray-400
              text-sm
              "
            >
              Premium Rating
            </span>
          </div>

          {/* PRICE */}

          <h2
            className="
            text-4xl
            sm:text-5xl
            font-black
            mb-6
            "
          >
            ${product.price}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
            mb-10
            max-w-2xl
            "
          >
            {product.description}
          </p>

          {/* SIZE */}

          <div className="mb-10">

            <p
              className="
              font-semibold
              mb-4
              "
            >
              Select Size
            </p>

            <div className="flex gap-3 flex-wrap">

              {["S", "M", "L", "XL"].map(
                (size) => (

                  <button
                    key={size}
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-gray-300
                    bg-white
                    font-semibold
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    {size}
                  </button>

                )
              )}
            </div>
          </div>

          {/* QUANTITY */}

          <div className="mb-10">

            <p
              className="
              font-semibold
              mb-4
              "
            >
              Quantity
            </p>

            <div
              className="
              flex
              items-center
              gap-4
              "
            >
              <button
                onClick={() =>
                  setQuantity(
                    quantity > 1
                      ? quantity - 1
                      : 1
                  )
                }
                className="
                w-12
                h-12
                rounded-2xl
                bg-white
                border
                border-gray-200
                flex
                items-center
                justify-center
                hover:bg-black
                hover:text-white
                transition
                "
              >
                <FaMinus />
              </button>

              <span
                className="
                text-2xl
                font-black
                w-10
                text-center
                "
              >
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="
                w-12
                h-12
                rounded-2xl
                bg-white
                border
                border-gray-200
                flex
                items-center
                justify-center
                hover:bg-black
                hover:text-white
                transition
                "
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            "
          >
            {/* ADD TO CART */}

            <button
              onClick={() =>
                addToCart({
                  ...product,
                  quantity,
                })
              }
              className="
              flex-1
              bg-black
              text-white
              py-5
              rounded-2xl
              font-semibold
              text-lg
              hover:bg-gray-900
              hover:scale-[1.01]
              transition-all
              duration-300
              "
            >
              Add To Cart
            </button>

            {/* WISHLIST */}

            <button
              onClick={handleWishlist}
              className={`
                h-[64px]
                sm:w-[64px]
                rounded-2xl
                flex
                items-center
                justify-center
                text-xl
                transition-all
                duration-300

                ${
                  isWishlisted
                    ? "bg-red-500 text-white"
                    : "bg-white border border-gray-200 text-black"
                }
              `}
            >
              <FaHeart />
            </button>
          </div>

          {/* EXTRA INFO */}

          <div
            className="
            mt-10
            grid
            sm:grid-cols-3
            gap-4
            "
          >
            <div
              className="
              bg-white
              rounded-2xl
              p-5
              border
              border-gray-100
              "
            >
              <p
                className="
                font-semibold
                mb-1
                "
              >
                Free Shipping
              </p>

              <span
                className="
                text-sm
                text-gray-500
                "
              >
                Worldwide delivery
              </span>
            </div>

            <div
              className="
              bg-white
              rounded-2xl
              p-5
              border
              border-gray-100
              "
            >
              <p
                className="
                font-semibold
                mb-1
                "
              >
                Secure Payment
              </p>

              <span
                className="
                text-sm
                text-gray-500
                "
              >
                Protected checkout
              </span>
            </div>

            <div
              className="
              bg-white
              rounded-2xl
              p-5
              border
              border-gray-100
              "
            >
              <p
                className="
                font-semibold
                mb-1
                "
              >
                Easy Returns
              </p>

              <span
                className="
                text-sm
                text-gray-500
                "
              >
                30-day return policy
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;