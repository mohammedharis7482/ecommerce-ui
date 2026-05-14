import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-black text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* BRAND */}

        <div>

          <h2 className="text-4xl font-bold mb-6">

            ShopEase

          </h2>

          <p className="text-gray-400 leading-relaxed">

            Premium ecommerce shopping experience
            with modern fashion collections.

          </p>

        </div>

        {/* LINKS */}

        <div>

          <h3 className="text-xl font-semibold mb-6">

            Quick Links

          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>
            <li>Products</li>
            <li>Wishlist</li>
            <li>Cart</li>

          </ul>

        </div>

        {/* SUPPORT */}

        <div>

          <h3 className="text-xl font-semibold mb-6">

            Support

          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping</li>

          </ul>

        </div>

        {/* SOCIAL */}

        <div>

          <h3 className="text-xl font-semibold mb-6">

            Follow Us

          </h3>

          <div className="flex gap-5 text-2xl">

            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />

            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />

            <FaFacebook className="hover:text-blue-600 cursor-pointer transition" />

            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">

        © 2026 ShopEase. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;