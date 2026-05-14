import { Link } from "react-router-dom";

import products from "../data/products";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {

  return (

    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <section
        className="
        bg-black
        text-white
        min-h-screen
        flex
        items-center
        justify-center
        "
      >
        <div className="text-center px-6">

          <h1
            className="
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            mb-8
            "
          >
            Discover Your
            <br />
            Perfect Style
          </h1>

          <p
            className="
            text-gray-300
            text-lg
            md:text-2xl
            max-w-2xl
            mx-auto
            mb-10
            "
          >
            Explore premium fashion collections
            with modern shopping experience.
          </p>

          <Link to="/products">

            <button
              className="
              bg-white
              text-black
              px-10
              py-4
              rounded-full
              text-lg
              font-semibold
              hover:scale-105
              transition
              "
            >
              Shop Now
            </button>

          </Link>

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
        <div className="mb-14">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mb-4
            "
          >
            Featured Collections
          </h2>

          <p className="text-gray-500 text-lg">

            Modern fashion products curated
            for your lifestyle.

          </p>

        </div>

        {/* PRODUCTS GRID */}

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

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Home;