import { useState } from "react";

import Navbar from "../components/Navbar";

import ProductCard from "../components/ProductCard";

import Footer from "../components/Footer";

import products from "../data/products";

import {
  FaSearch,
  FaSlidersH,
} from "react-icons/fa";

function Products() {

  // SEARCH

  const [search, setSearch] =
    useState("");

  // CATEGORY

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

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

  // SORTING

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

    <div className="bg-[#f7f7f7] min-h-screen">

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
            text-sm
            mb-5
            "
          >
            Premium Store
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-[1]
            text-black
            mb-8
            max-w-5xl
            "
          >
            Discover
            <br />
            Modern Fashion.
          </h1>

          <p
            className="
            text-lg
            text-gray-500
            leading-relaxed
            max-w-2xl
            "
          >
            Explore curated luxury
            streetwear, premium fashion,
            and modern essentials crafted
            for the next generation.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}

      <section className="px-6 pb-14">

        <div
          className="
          max-w-7xl
          mx-auto
          bg-white
          rounded-[32px]
          p-6
          md:p-8
          border
          border-gray-100
          shadow-sm
          "
        >
          <div
            className="
            flex
            flex-col
            xl:flex-row
            gap-6
            xl:items-center
            xl:justify-between
            "
          >
            {/* SEARCH */}

            <div
              className="
              relative
              w-full
              xl:w-[350px]
              "
            >
              <FaSearch
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="
                w-full
                pl-14
                pr-5
                py-4
                rounded-2xl
                border
                border-gray-200
                outline-none
                focus:border-black
                bg-[#fafafa]
                transition
                "
              />
            </div>

            {/* CATEGORY CHIPS */}

            <div
              className="
              flex
              flex-wrap
              gap-3
              "
            >
              {categories.map(
                (category) => (

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
                      font-semibold
                      transition-all
                      duration-300
                      
                      ${
                        selectedCategory ===
                        category
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-black hover:bg-gray-200"
                      }
                    `}
                  >
                    {category}
                  </button>

                )
              )}
            </div>

            {/* SORT */}

            <div
              className="
              flex
              items-center
              gap-4
              "
            >
              <FaSlidersH
                className="
                text-gray-500
                "
              />

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
                bg-[#fafafa]
                outline-none
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
        </div>
      </section>

      {/* RESULTS */}

      <section className="px-6 pb-10">

        <div
          className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          "
        >
          <div>

            <h2
              className="
              text-3xl
              md:text-4xl
              font-black
              mb-2
              "
            >
              All Products
            </h2>

            <p
              className="
              text-gray-500
              "
            >
              Showing {
                filteredProducts.length
              } premium products
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}

      <section className="px-6 pb-28">

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