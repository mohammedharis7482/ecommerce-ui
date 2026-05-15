import { useContext } from "react";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowRight,
  FaLock,
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

    <div className="bg-[#f7f7f7] min-h-screen pt-24 sm:pt-28">

      {/* HEADER */}

      <section
        className="
        px-4
        sm:px-6
        mb-14
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
            Your Shopping Cart
          </p>

          <h1
            className="
            text-4xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            "
          >
            Cart Overview
          </h1>
        </div>
      </section>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div
          className="
          flex
          items-center
          justify-center
          px-6
          pb-32
          "
        >
          <div
            className="
            bg-white
            rounded-[32px]
            p-10
            sm:p-16
            text-center
            border
            border-gray-100
            shadow-sm
            max-w-2xl
            w-full
            "
          >
            <h2
              className="
              text-3xl
              sm:text-5xl
              font-black
              mb-5
              "
            >
              Your Cart Is Empty
            </h2>

            <p
              className="
              text-gray-500
              text-base
              sm:text-lg
              "
            >
              Explore premium products
              and add your favorites
              to the cart.
            </p>
          </div>
        </div>

      ) : (

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
            grid
            lg:grid-cols-3
            gap-8
            xl:gap-12
            items-start
            "
          >
            {/* LEFT SIDE */}

            <div
              className="
              lg:col-span-2
              space-y-6
              "
            >
              {cartItems.map(
                (item) => (

                  <div
                    key={item.id}
                    className="
                    bg-white
                    rounded-[30px]
                    border
                    border-gray-100
                    overflow-hidden
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-500
                    "
                  >
                    <div
                      className="
                      flex
                      flex-col
                      md:flex-row
                      "
                    >
                      {/* IMAGE */}

                      <div
                        className="
                        bg-[#f6f6f6]
                        md:w-[280px]
                        h-[300px]
                        md:h-auto
                        flex
                        items-center
                        justify-center
                        p-8
                        "
                      >
                        <img
                          src={
                            item.images?.[0]
                          }
                          alt={item.name}
                          className="
                          max-h-full
                          object-contain
                          "
                        />
                      </div>

                      {/* CONTENT */}

                      <div
                        className="
                        flex-1
                        p-6
                        sm:p-8
                        flex
                        flex-col
                        "
                      >
                        {/* CATEGORY */}

                        <p
                          className="
                          uppercase
                          tracking-[3px]
                          text-gray-400
                          text-xs
                          mb-4
                          "
                        >
                          {
                            item.category
                          }
                        </p>

                        {/* TITLE */}

                        <h2
                          className="
                          text-2xl
                          sm:text-3xl
                          font-black
                          leading-tight
                          mb-4
                          "
                        >
                          {item.name}
                        </h2>

                        {/* PRICE */}

                        <h3
                          className="
                          text-3xl
                          sm:text-4xl
                          font-black
                          mb-8
                          "
                        >
                          $
                          {item.price}
                        </h3>

                        {/* BOTTOM */}

                        <div
                          className="
                          mt-auto
                          flex
                          flex-col
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                          gap-6
                          "
                        >
                          {/* QUANTITY */}

                          <div
                            className="
                            flex
                            items-center
                            gap-4
                            "
                          >
                            <button
                              onClick={() =>
                                decreaseQuantity(
                                  item.id
                                )
                              }
                              className="
                              w-11
                              h-11
                              rounded-full
                              bg-gray-100
                              hover:bg-black
                              hover:text-white
                              transition
                              flex
                              items-center
                              justify-center
                              "
                            >
                              <FaMinus />
                            </button>

                            <span
                              className="
                              text-xl
                              font-bold
                              min-w-[20px]
                              text-center
                              "
                            >
                              {
                                item.quantity
                              }
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(
                                  item.id
                                )
                              }
                              className="
                              w-11
                              h-11
                              rounded-full
                              bg-gray-100
                              hover:bg-black
                              hover:text-white
                              transition
                              flex
                              items-center
                              justify-center
                              "
                            >
                              <FaPlus />
                            </button>
                          </div>

                          {/* REMOVE */}

                          <button
                            onClick={() =>
                              removeFromCart(
                                item.id
                              )
                            }
                            className="
                            flex
                            items-center
                            gap-3
                            text-red-500
                            font-semibold
                            hover:opacity-70
                            transition
                            "
                          >
                            <FaTrash />

                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              )}
            </div>

            {/* SUMMARY */}

            <div
              className="
              bg-white
              rounded-[32px]
              border
              border-gray-100
              p-6
              sm:p-8
              shadow-sm
              sticky
              top-28
              "
            >
              {/* TITLE */}

              <h2
                className="
                text-3xl
                sm:text-4xl
                font-black
                mb-10
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
                <span
                  className="
                  text-gray-500
                  "
                >
                  Subtotal
                </span>

                <span
                  className="
                  font-bold
                  text-lg
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
                mb-5
                "
              >
                <span
                  className="
                  text-gray-500
                  "
                >
                  Shipping
                </span>

                <span
                  className="
                  font-bold
                  "
                >
                  Free
                </span>
              </div>

              {/* TAX */}

              <div
                className="
                flex
                items-center
                justify-between
                mb-8
                "
              >
                <span
                  className="
                  text-gray-500
                  "
                >
                  Taxes
                </span>

                <span
                  className="
                  font-bold
                  "
                >
                  Included
                </span>
              </div>

              {/* TOTAL */}

              <div
                className="
                border-t
                border-gray-200
                pt-6
                mb-10
                flex
                items-center
                justify-between
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

              {/* CHECKOUT */}

              <button
                className="
                w-full
                bg-black
                hover:bg-gray-900
                text-white
                py-5
                rounded-full
                font-semibold
                text-base
                transition-all
                duration-300
                flex
                items-center
                justify-center
                gap-3
                hover:scale-[1.02]
                "
              >
                Proceed To Checkout

                <FaArrowRight />
              </button>

              {/* SECURITY */}

              <div
                className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                text-gray-500
                text-sm
                "
              >
                <FaLock />

                Secure Checkout
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default Cart;