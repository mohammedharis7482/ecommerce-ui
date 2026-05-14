import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import Footer from "../components/Footer";

import {
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // SUBTOTAL

  const subtotal = cartItems.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0
  );

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}

      <section className="bg-black text-white py-32 text-center">

        <h1 className="text-6xl font-bold mb-6">

          Shopping Cart

        </h1>

        <p className="text-gray-300 text-xl">

          Review your selected products.

        </p>

      </section>

      {/* CART CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        {cartItems.length === 0 ? (

          <div className="bg-white rounded-[30px] p-20 text-center shadow-md">

            <h2 className="text-4xl font-bold mb-6">

              Cart is Empty

            </h2>

            <p className="text-gray-500 text-lg">

              Add products to your shopping cart.

            </p>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-[30px] p-6 flex gap-6 items-center shadow-lg hover:shadow-2xl transition"
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-36 object-cover rounded-2xl"
                  />

                  {/* INFO */}

                  <div className="flex-1">

                    <h2 className="text-3xl font-bold mb-3">

                      {item.name}

                    </h2>

                    <p className="text-gray-500 mb-6">

                      ${item.price}

                    </p>

                    {/* QUANTITY */}

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="bg-gray-200 p-3 rounded-xl hover:bg-gray-300 transition"
                      >

                        <FaMinus />

                      </button>

                      <span className="text-xl font-bold">

                        {item.quantity}

                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="bg-gray-200 p-3 rounded-xl hover:bg-gray-300 transition"
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
                    className="text-red-500 text-2xl hover:scale-110 transition"
                  >

                    <FaTrash />

                  </button>

                </div>
              ))}

            </div>

            {/* RIGHT */}

            <div className="bg-white rounded-[30px] p-10 shadow-lg h-fit sticky top-32">

              <h2 className="text-4xl font-bold mb-10">

                Order Summary

              </h2>

              <div className="space-y-6 mb-10">

                <div className="flex justify-between text-lg">

                  <span>Subtotal</span>

                  <span>${subtotal}</span>

                </div>

                <div className="flex justify-between text-lg">

                  <span>Shipping</span>

                  <span>Free</span>

                </div>

                <div className="border-t pt-6 flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span>${subtotal}</span>

                </div>

              </div>

              <button className="w-full bg-black text-white py-5 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition">

                Proceed To Checkout

              </button>

            </div>

          </div>

        )}

      </section>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Cart;