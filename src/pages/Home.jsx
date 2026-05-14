import PageWrapper from "../components/animations/PageWrapper";
import { Link } from "react-router-dom";

import {
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaHeadphones,
} from "react-icons/fa";

import products from "../data/products";

import ProductCard from "../components/ProductCard";

import Footer from "../components/Footer";

function Home() {

  return (
    <PageWrapper>

    <div className="bg-[#f5f5f5] overflow-hidden">

      {/* HERO SECTION */}

      <section
        className="
        relative
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        "
      >
        {/* GLOW EFFECTS */}

        <div
          className="
          absolute
          top-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-white/10
          rounded-full
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-[-150px]
          left-[-150px]
          w-[400px]
          h-[400px]
          bg-white/5
          rounded-full
          blur-3xl
          "
        />

        {/* CONTENT */}

        <div
          className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-32
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >
          {/* LEFT */}

          <div>

            <div
              className="
              inline-flex
              items-center
              gap-3
              bg-white/10
              border
              border-white/10
              px-5
              py-2
              rounded-full
              mb-8
              backdrop-blur-md
              "
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />

              <p
                className="
                text-sm
                tracking-[3px]
                uppercase
                text-gray-300
                "
              >
                Luxury Fashion Collection
              </p>
            </div>

            <h1
              className="
              text-6xl
              md:text-8xl
              font-black
              leading-[0.95]
              mb-8
              "
            >
              Wear
              <br />

              <span className="text-gray-400">

                The Future

              </span>

              <br />

              Of Fashion
            </h1>

            <p
              className="
              text-lg
              md:text-xl
              text-gray-300
              leading-relaxed
              max-w-xl
              mb-12
              "
            >
              Premium fashion collections crafted
              for modern lifestyles, luxury aesthetics,
              and timeless minimal experiences.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link to="/products">

                <button
                  className="
                  bg-white
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                  "
                >
                  Shop Collection
                </button>

              </Link>

              <button
                className="
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-black
                transition
                "
              >
                Explore Brands
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div
            className="
            hidden
            lg:flex
            justify-center
            relative
            "
          >
            <div
              className="
              relative
              w-[500px]
              h-[650px]
              rounded-[40px]
              overflow-hidden
              shadow-2xl
              "
            >
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
                alt="Fashion"
                className="
                w-full
                h-full
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                to-transparent
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        "
      >
        {/* CARD */}

        <div
          className="
          bg-white
          p-8
          rounded-3xl
          shadow-sm
          text-center
          "
        >
          <FaTruck className="text-4xl mx-auto mb-5" />

          <h3 className="text-2xl font-bold mb-3">

            Free Shipping

          </h3>

          <p className="text-gray-500">

            Fast premium worldwide delivery.

          </p>
        </div>

        {/* CARD */}

        <div
          className="
          bg-white
          p-8
          rounded-3xl
          shadow-sm
          text-center
          "
        >
          <FaShieldAlt className="text-4xl mx-auto mb-5" />

          <h3 className="text-2xl font-bold mb-3">

            Secure Payment

          </h3>

          <p className="text-gray-500">

            Trusted encrypted transactions.

          </p>
        </div>

        {/* CARD */}

        <div
          className="
          bg-white
          p-8
          rounded-3xl
          shadow-sm
          text-center
          "
        >
          <FaStar className="text-4xl mx-auto mb-5" />

          <h3 className="text-2xl font-bold mb-3">

            Premium Quality

          </h3>

          <p className="text-gray-500">

            Luxury crafted fashion products.

          </p>
        </div>

        {/* CARD */}

        <div
          className="
          bg-white
          p-8
          rounded-3xl
          shadow-sm
          text-center
          "
        >
          <FaHeadphones className="text-4xl mx-auto mb-5" />

          <h3 className="text-2xl font-bold mb-3">

            24/7 Support

          </h3>

          <p className="text-gray-500">

            Dedicated customer assistance.

          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-24
        "
      >
        <div className="mb-16">

          <p
            className="
            uppercase
            tracking-[4px]
            text-gray-400
            mb-4
            "
          >
            Featured Collection
          </p>

          <h2
            className="
            text-5xl
            font-black
            mb-6
            "
          >
            Trending Products
          </h2>

          <p
            className="
            text-gray-500
            text-lg
            max-w-2xl
            "
          >
            Explore premium fashion collections
            designed for modern aesthetics.
          </p>
        </div>

        {/* PRODUCTS */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          "
        >
          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section
        className="
        bg-black
        text-white
        py-28
        "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          "
        >
          {/* HEADER */}

          <div className="text-center mb-20">

            <p
              className="
              uppercase
              tracking-[4px]
              text-gray-400
              mb-4
              "
            >
              Testimonials
            </p>

            <h2
              className="
              text-5xl
              font-black
              "
            >
              What Customers Say
            </h2>
          </div>

          {/* TESTIMONIAL GRID */}

          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >
            {/* CARD */}

            <div
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-8
              rounded-3xl
              "
            >
              <p
                className="
                text-gray-300
                leading-relaxed
                mb-8
                "
              >
                “Absolutely premium experience.
                The UI, products, and delivery quality
                are top level.”
              </p>

              <h3 className="text-2xl font-bold">

                Sarah Johnson

              </h3>

              <p className="text-gray-400">

                Fashion Creator

              </p>
            </div>

            {/* CARD */}

            <div
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-8
              rounded-3xl
              "
            >
              <p
                className="
                text-gray-300
                leading-relaxed
                mb-8
                "
              >
                “The best modern ecommerce shopping
                experience I’ve seen recently.”
              </p>

              <h3 className="text-2xl font-bold">

                Michael Lee

              </h3>

              <p className="text-gray-400">

                UI/UX Designer

              </p>
            </div>

            {/* CARD */}

            <div
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              p-8
              rounded-3xl
              "
            >
              <p
                className="
                text-gray-300
                leading-relaxed
                mb-8
                "
              >
                “Luxury aesthetics with smooth shopping
                interactions. Amazing frontend work.”
              </p>

              <h3 className="text-2xl font-bold">

                Emma Wilson

              </h3>

              <p className="text-gray-400">

                Brand Manager

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section
        className="
        max-w-5xl
        mx-auto
        px-6
        py-28
        "
      >
        <div
          className="
          bg-black
          text-white
          rounded-[40px]
          p-14
          text-center
          relative
          overflow-hidden
          "
        >
          {/* GLOW */}

          <div
            className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[300px]
            h-[300px]
            bg-white/10
            rounded-full
            blur-3xl
            "
          />

          {/* CONTENT */}

          <div className="relative z-10">

            <p
              className="
              uppercase
              tracking-[4px]
              text-gray-400
              mb-5
              "
            >
              Newsletter
            </p>

            <h2
              className="
              text-5xl
              font-black
              mb-6
              "
            >
              Stay Updated
            </h2>

            <p
              className="
              text-gray-300
              text-lg
              max-w-2xl
              mx-auto
              mb-10
              "
            >
              Subscribe to receive exclusive offers,
              premium collections, and latest fashion
              updates.
            </p>

            {/* INPUT */}

            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                px-6
                py-4
                rounded-full
                text-black
                outline-none
                w-full
                sm:w-[400px]
                "
              />

              <button
                className="
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />
    </div>
    </PageWrapper>
  );
}

export default Home;