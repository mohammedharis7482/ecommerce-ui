import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaShippingFast,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";

import products from "../data/products";

function Home() {

  const featuredProducts =
    products.slice(0, 4);

  const bestSellers =
    products.slice(4, 8);

  return (

    <div className="bg-[#f7f7f7] overflow-hidden">

      <Navbar />

      {/* HERO */}

      <section
        className="
        pt-28
        sm:pt-32
        lg:pt-36
        pb-20
        sm:pb-24
        px-4
        sm:px-6
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-14
          lg:gap-20
          items-center
          "
        >
          {/* LEFT */}

          <div
            className="
            order-2
            lg:order-1
            "
          >
            <p
              className="
              uppercase
              tracking-[4px]
              text-gray-400
              mb-5
              text-xs
              sm:text-sm
              "
            >
              Modern Luxury Fashion
            </p>

            <h1
              className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-black
              leading-[0.95]
              text-black
              mb-8
              "
            >
              Discover
              <br />
              Premium
              <br />
              Fashion.
            </h1>

            <p
              className="
              text-base
              sm:text-lg
              text-gray-600
              leading-relaxed
              max-w-xl
              mb-10
              "
            >
              Explore luxury streetwear,
              premium essentials, and
              modern fashion collections
              designed for the next
              generation lifestyle.
            </p>

            {/* BUTTONS */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              "
            >
              <Link
                to="/products"
                className="
                bg-black
                hover:bg-gray-900
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Shop Now

                <FaArrowRight />
              </Link>

              <button
                className="
                bg-white
                border
                border-gray-200
                px-8
                py-4
                rounded-full
                font-semibold
                hover:border-black
                transition-all
                duration-300
                "
              >
                Explore Collections
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
            relative
            order-1
            lg:order-2
            "
          >
            <div
              className="
              rounded-[32px]
              sm:rounded-[40px]
              overflow-hidden
              shadow-2xl
              "
            >
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1400&auto=format&fit=crop"
                alt="Hero"
                className="
                w-full
                h-[500px]
                sm:h-[650px]
                lg:h-[780px]
                object-cover
                "
              />
            </div>

            {/* FLOATING CARD */}

            <div
              className="
              absolute
              bottom-5
              left-5
              sm:bottom-8
              sm:left-8
              bg-white/90
              backdrop-blur-md
              p-5
              sm:p-6
              rounded-3xl
              shadow-xl
              "
            >
              <p
                className="
                text-xs
                sm:text-sm
                text-gray-400
                mb-2
                "
              >
                Trending Collection
              </p>

              <h3
                className="
                text-xl
                sm:text-2xl
                font-black
                "
              >
                Urban Luxury
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="
        px-4
        sm:px-6
        pb-20
        sm:pb-24
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          "
        >
          {[
            {
              icon: <FaShippingFast />,
              title: "Free Shipping",
              text: "Free worldwide delivery for all premium collections.",
            },

            {
              icon: <FaUndo />,
              title: "Easy Returns",
              text: "30-day hassle free return policy for every order.",
            },

            {
              icon: <FaShieldAlt />,
              title: "Secure Payment",
              text: "Protected payments with premium checkout security.",
            },
          ].map((feature, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-[30px]
              p-8
              border
              border-gray-100
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              <div
                className="
                text-3xl
                mb-5
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                text-2xl
                font-bold
                mb-3
                "
              >
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.text}
              </p>
            </div>

          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section
        className="
        px-4
        sm:px-6
        pb-24
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}

          <div
            className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5
            mb-14
            "
          >
            <div>

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
                Featured Collection
              </p>

              <h2
                className="
                text-4xl
                sm:text-5xl
                font-black
                "
              >
                New Arrivals
              </h2>
            </div>

            <Link
              to="/products"
              className="
              flex
              items-center
              gap-3
              font-semibold
              "
            >
              View All

              <FaArrowRight />
            </Link>
          </div>

          {/* GRID */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            sm:gap-8
            "
          >
            {featuredProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}
          </div>
        </div>
      </section>

      {/* BANNER */}

      <section
        className="
        px-4
        sm:px-6
        pb-24
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          sm:rounded-[40px]
          overflow-hidden
          relative
          "
        >
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
            alt="Collection"
            className="
            w-full
            h-[500px]
            sm:h-[650px]
            object-cover
            "
          />

          <div
            className="
            absolute
            inset-0
            bg-black/45
            flex
            items-center
            "
          >
            <div
              className="
              p-6
              sm:p-12
              lg:p-20
              "
            >
              <p
                className="
                uppercase
                tracking-[4px]
                text-white/70
                text-xs
                sm:text-sm
                mb-5
                "
              >
                Exclusive Collection
              </p>

              <h2
                className="
                text-4xl
                sm:text-6xl
                lg:text-7xl
                font-black
                text-white
                leading-tight
                mb-8
                "
              >
                Minimal
                <br />
                Luxury
              </h2>

              <Link
                to="/products"
                className="
                inline-flex
                items-center
                gap-3
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-gray-200
                transition
                "
              >
                Shop Collection

                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}

      <section
        className="
        px-4
        sm:px-6
        pb-24
        "
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

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
              Best Selling Products
            </p>

            <h2
              className="
              text-4xl
              sm:text-5xl
              font-black
              "
            >
              Most Popular
            </h2>
          </div>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            sm:gap-8
            "
          >
            {bestSellers.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section
        className="
        px-4
        sm:px-6
        pb-24
        "
      >
        <div
          className="
          max-w-5xl
          mx-auto
          bg-black
          rounded-[32px]
          sm:rounded-[40px]
          p-8
          sm:p-14
          lg:p-20
          text-center
          "
        >
          <p
            className="
            uppercase
            tracking-[4px]
            text-white/50
            text-xs
            sm:text-sm
            mb-5
            "
          >
            Stay Updated
          </p>

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            text-white
            leading-tight
            mb-8
            "
          >
            Join Our
            <br />
            Premium Newsletter
          </h2>

          <p
            className="
            text-white/70
            text-base
            sm:text-lg
            max-w-2xl
            mx-auto
            mb-10
            leading-relaxed
            "
          >
            Get updates about premium
            drops, exclusive collections,
            and modern fashion trends.
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            max-w-2xl
            mx-auto
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1
              px-6
              py-5
              rounded-full
              outline-none
              "
            />

            <button
              className="
              bg-white
              text-black
              px-8
              py-5
              rounded-full
              font-semibold
              hover:bg-gray-200
              transition
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;