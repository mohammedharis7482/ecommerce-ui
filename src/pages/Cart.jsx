import { useContext } from "react";

import {
  FaTrash,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { CartContext } from "../context/CartContext";

import Footer from "../components/Footer";

function Cart() {

  const {
    cartItems,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    subtotal,
  } = useContext(CartContext);

  return (

    <div className="bg-[#f8f8f8] min-h-screen pt-32">

      {/* HEADER */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        mb-16
        "
      >
        <p
          className="
          uppercase
          tracking-[5px]
          text-gray-400
          mb-4
          "
        >
          Your Shopping Cart
        </p>

        <h1
          className="
          text-6xl
          font-black
          text-black
          "
        >
          Cart Overview
        </h1>
      </div>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div
          className="
          flex
          items-center
          justify-center
          py-32
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-gray-400
            "
          >
            Your cart is empty
          </h2>
        </div>

      ) : (

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-3
          gap-10
          pb-24
          "
        >
          {/* CART ITEMS */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                bg-white
                rounded-[30px]
                p-6
                flex
                flex-col
                md:flex-row
                gap-6
                items-center
                border
                border-gray-100
                shadow-sm
                "
              >
                {/* IMAGE */}

                <img
                  loading="lazy"
                  src={item.images[0]}
                  alt={item.name}
                  className="
                  w-full
                  md:w-[180px]
                  h-[220px]
                  object-cover
                  rounded-2xl
                  "
                />

                {/* CONTENT */}

                <div className="flex-1 w-full">

                  {/* CATEGORY */}

                  <p
                    className="
                    uppercase
                    tracking-[3px]
                    text-gray-400
                    text-xs
                    mb-3
                    "
                  >
                    {item.category}
                  </p>

                  {/* TITLE */}

                  <h2
                    className="
                    text-3xl
                    font-bold
                    mb-4
                    "
                  >
                    {item.name}
                  </h2>

                  {/* PRICE */}

                  <p
                    className="
                    text-2xl
                    font-black
                    mb-6
                    "
                  >
                    ${item.price}
                  </p>

                  {/* QUANTITY */}

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >
                    {/* MINUS */}

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                      className="
                      w-10
                      h-10
                      rounded-full
                      bg-gray-100
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

                    {/* QUANTITY */}

                    <span
                      className="
                      text-xl
                      font-bold
                      "
                    >
                      {item.quantity}
                    </span>

                    {/* PLUS */}

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                      className="
                      w-10
                      h-10
                      rounded-full
                      bg-gray-100
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

                {/* REMOVE */}

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-red-50
                  text-red-500
                  flex
                  items-center
                  justify-center
                  hover:bg-red-500
                  hover:text-white
                  transition
                  "
                >
                  <FaTrash />
                </button>
              </div>

            ))}
          </div>

          {/* SUMMARY */}

          <div
            className="
            bg-white
            rounded-[30px]
            p-8
            h-fit
            border
            border-gray-100
            shadow-sm
            sticky
            top-32
            "
          >
            <h2
              className="
              text-3xl
              font-black
              mb-8
              "
            >
              Order Summary
            </h2>

            {/* SUBTOTAL */}

            <div
              className="
              flex
              items-center
              justify-between
              mb-5
              "
            >
              <span className="text-gray-500">

                Subtotal

              </span>

              <span
                className="
                font-bold
                text-xl
                "
              >
                ${subtotal}
              </span>
            </div>

            {/* SHIPPING */}

            <div
              className="
              flex
              items-center
              justify-between
              mb-8
              "
            >
              <span className="text-gray-500">

                Shipping

              </span>

              <span className="font-bold">

                Free

              </span>
            </div>

            {/* TOTAL */}

            <div
              className="
              flex
              items-center
              justify-between
              border-t
              pt-6
              mb-10
              "
            >
              <span
                className="
                text-2xl
                font-black
                "
              >
                Total
              </span>

              <span
                className="
                text-3xl
                font-black
                "
              >
                ${subtotal}
              </span>
            </div>

            {/* BUTTON */}

            <button
              className="
              w-full
              bg-black
              text-white
              py-5
              rounded-2xl
              font-semibold
              hover:scale-[1.02]
              transition
              "
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}

      <Footer />

    </div>
  );
}

export default Cart;