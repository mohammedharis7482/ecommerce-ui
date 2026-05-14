import { useState } from "react";

import products from "../data/products";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products() {

  const [searchTerm, setSearchTerm] =
    useState("");

  // FILTER PRODUCTS

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (

    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section
        className="
        bg-black
        text-white
        py-28
        text-center
        "
      >
        <h1
          className="
          text-5xl
          md:text-7xl
          font-extrabold
          mb-6
          "
        >
          Explore Products
        </h1>

        <p className="text-gray-300 text-lg">

          Discover modern fashion collections.

        </p>
      </section>

      {/* PRODUCTS SECTION */}

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        "
      >
        {/* SEARCH BAR */}

        <div className="mb-14">

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
            w-full
            md:w-[400px]
            px-6
            py-4
            rounded-2xl
            border
            border-gray-200
            outline-none
            focus:border-black
            transition
            shadow-sm
            "
          />

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
          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}
        </div>

        {/* EMPTY STATE */}

        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <h2
              className="
              text-3xl
              font-bold
              mb-4
              "
            >
              No Products Found
            </h2>

            <p className="text-gray-500">

              Try another product name.

            </p>

          </div>

        )}

      </section>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Products;