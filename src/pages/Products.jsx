import { useState } from "react";

import Navbar from "../components/Navbar";

import ProductCard from "../components/ProductCard";

import Footer from "../components/Footer";

import products from "../data/products";

function Products() {

  // SEARCH

  const [search, setSearch] =
    useState("");

  // CATEGORY

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // SORT

  const [sortOption, setSortOption] =
    useState("default");

  // CATEGORIES

  const categories = [
    "All",
    "Hoodies",
    "Shoes",
    "Jackets",
    "T-Shirts",
    "Watches",
    "Bags",
  ];

  // FILTER PRODUCTS

  let filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : product.category ===
            selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // SORT PRODUCTS

  if (sortOption === "low") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "high") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortOption === "rating") {

    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (

    <div className="bg-[#f8f8f8] min-h-screen">

      <Navbar />

      {/* HERO */}

      <section
        className="
        pt-36
        pb-16
        px-6
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
            tracking-[5px]
            text-gray-400
            mb-5
            "
          >
            Premium Collection
          </p>

          <h1
            className="
            text-6xl
            md:text-7xl
            font-black
            leading-tight
            text-black
            max-w-4xl
            "
          >
            Discover Modern Luxury Fashion
          </h1>
        </div>
      </section>

      {/* FILTER BAR */}

      <section className="px-6 pb-12">

        <div
          className="
          max-w-7xl
          mx-auto
          bg-white
          rounded-[30px]
          p-6
          shadow-sm
          border
          border-gray-100
          "
        >
          <div
            className="
            flex
            flex-col
            lg:flex-row
            gap-6
            items-center
            justify-between
            "
          >
            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search premium products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              w-full
              lg:w-[320px]
              px-6
              py-4
              rounded-2xl
              border
              border-gray-200
              outline-none
              focus:border-black
              transition
              "
            />

            {/* CATEGORIES */}

            <div
              className="
              flex
              flex-wrap
              gap-3
              justify-center
              "
            >
              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                  className={`
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-medium
                    transition
                    
                    ${
                      selectedCategory ===
                      category
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }
                  `}
                >
                  {category}
                </button>

              ))}
            </div>

            {/* SORT */}

            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(
                  e.target.value
                )
              }
              className="
              px-5
              py-4
              rounded-2xl
              border
              border-gray-200
              outline-none
              bg-white
              "
            >
              <option value="default">

                Featured

              </option>

              <option value="low">

                Price Low → High

              </option>

              <option value="high">

                Price High → Low

              </option>

              <option value="rating">

                Highest Rated

              </option>
            </select>
          </div>
        </div>
      </section>

      {/* RESULTS */}

      <section className="px-6 pb-6">

        <div
          className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          "
        >
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Showing {
              filteredProducts.length
            } Products
          </h2>
        </div>
      </section>

      {/* PRODUCTS GRID */}

      <section className="px-6 pb-24">

        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          "
        >
          {filteredProducts.map(
            (product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Products;