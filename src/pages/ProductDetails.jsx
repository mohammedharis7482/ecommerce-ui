import { useParams } from 'react-router-dom'

import { useContext, useState } from 'react'

import Footer from '../components/Footer'

import products from '../data/products'

import { CartContext } from '../context/CartContext'

import {
  FaStar,
  FaMinus,
  FaPlus
} from 'react-icons/fa'

function ProductDetails() {

  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const product = products.find(
    item => item.id === Number(id)
  )

  const [quantity, setQuantity] = useState(1)

  /* INCREASE */

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  /* DECREASE */

  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity(quantity - 1)
    }

  }

  return (

    <>

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[700px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* CONTENT */}

          <div>

            {/* CATEGORY */}

            <p className="text-gray-400 text-lg mb-4">

              {product.category}

            </p>

            {/* TITLE */}

            <h1 className="text-5xl font-bold mb-6">

              {product.name}

            </h1>

            {/* RATING */}

            <div className="flex items-center gap-3 mb-6">

              <FaStar className="text-yellow-400 text-xl" />

              <span className="text-lg">

                {product.rating} Rating

              </span>

            </div>

            {/* PRICE */}

            <h2 className="text-4xl font-bold mb-8">

              ${product.price}

            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-600 leading-8 mb-10">

              Premium quality fashion product designed for
              modern lifestyle and everyday comfort.
              Built with modern materials and minimal aesthetics.

            </p>

            {/* QUANTITY */}

            <div className="flex items-center gap-6 mb-10">

              <button
                onClick={decreaseQuantity}
                className="bg-gray-200 p-4 rounded-full"
              >

                <FaMinus />

              </button>

              <span className="text-2xl font-bold">

                {quantity}

              </span>

              <button
                onClick={increaseQuantity}
                className="bg-gray-200 p-4 rounded-full"
              >

                <FaPlus />

              </button>

            </div>

            {/* BUTTON */}

            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >

              Add To Cart

            </button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  )
}

export default ProductDetails