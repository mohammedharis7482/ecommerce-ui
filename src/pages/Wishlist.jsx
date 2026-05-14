import { useContext } from "react";

import { WishlistContext } from "../context/WishlistContext";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Wishlist() {

  const { wishlistItems } = useContext(WishlistContext);

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}

      <section className="bg-black text-white py-32 text-center">

        <h1 className="text-6xl font-bold mb-6">

          Your Wishlist

        </h1>

        <p className="text-gray-300 text-xl">

          Save your favorite products.

        </p>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        {wishlistItems.length === 0 ? (

          <div className="bg-white rounded-[30px] p-20 text-center shadow-md">

            <h2 className="text-4xl font-bold mb-6">

              Wishlist is Empty

            </h2>

            <p className="text-gray-500 text-lg">

              Add products to your wishlist.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {wishlistItems.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </section>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Wishlist;