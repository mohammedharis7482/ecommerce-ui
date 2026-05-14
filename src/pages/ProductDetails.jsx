import { useParams } from "react-router-dom";

import { useContext, useState } from "react";

import {
  FaStar,
  FaHeart,
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
    wishlistItems,
  } = useContext(WishlistContext);

  const [quantity, setQuantity] =
    useState(1);

  // MAIN IMAGE

  const [mainImage, setMainImage] =
    useState(product?.images?.[0]);

  if (!product) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Product Not Found

      </div>
    );
  }

  // WISHLIST CHECK

  const isWishlisted =
    wishlistItems.some(
      (item) => item.id === product.id
    );

  return (

    <div className="bg-gray-50 min-h-screen pt-28">

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        lg:grid-cols-2
        gap-16
        "
      >
        {/* LEFT */}

        <div>

          {/* MAIN IMAGE */}

          <div
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-lg
            mb-6
            "
          >
            <img
              src={mainImage}
              alt={product.name}
              className="
              w-full
              h-[650px]
              object-cover
              "
            />
          </div>

          {/* THUMBNAILS */}

          <div className="flex gap-4">

            {product.images.map((image, index) => (

              <button
                key={index}
                onClick={() =>
                  setMainImage(image)
                }
                className={`
                  w-24
                  h-24
                  rounded-2xl
                  overflow-hidden
                  border-2
                  
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

            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div>

          {/* CATEGORY */}

          <p
            className="
            uppercase
            tracking-widest
            text-gray-400
            mb-4
            "
          >
            {product.category}
          </p>

          {/* TITLE */}

          <h1
            className="
            text-5xl
            font-black
            leading-tight
            mb-6
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
            mb-8
            "
          >
            <FaStar className="text-yellow-400" />

            <span className="text-lg text-gray-600">

              {product.rating}

            </span>
          </div>

          {/* PRICE */}

          <h2
            className="
            text-4xl
            font-bold
            mb-8
            "
          >
            ${product.price}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
            text-gray-600
            text-lg
            leading-relaxed
            mb-10
            "
          >
            {product.description}
          </p>

          {/* SIZE */}

          <div className="mb-10">

            <p className="font-semibold mb-4">

              Select Size

            </p>

            <div className="flex gap-4">

              {["S", "M", "L", "XL"].map((size) => (

                <button
                  key={size}
                  className="
                  w-14
                  h-14
                  rounded-xl
                  border
                  border-gray-300
                  hover:bg-black
                  hover:text-white
                  transition
                  "
                >
                  {size}
                </button>

              ))}
            </div>
          </div>

          {/* QUANTITY */}

          <div className="mb-10">

            <p className="font-semibold mb-4">

              Quantity

            </p>

            <div className="flex items-center gap-5">

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
                rounded-xl
                bg-black
                text-white
                text-2xl
                "
              >
                -

              </button>

              <span className="text-2xl font-bold">

                {quantity}

              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="
                w-12
                h-12
                rounded-xl
                bg-black
                text-white
                text-2xl
                "
              >
                +

              </button>
            </div>
          </div>

          {/* ACTIONS */}

          <div className="flex gap-5">

            <button
              onClick={() =>
                addToCart({
                  ...product,
                  quantity,
                })
              }
              className="
              bg-black
              text-white
              px-10
              py-5
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Add To Cart
            </button>

            <button
              onClick={() =>
                addToWishlist(product)
              }
              className={`
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-xl
                
                ${
                  isWishlisted
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }
              `}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;