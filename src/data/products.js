const products = [

  // HOODIES

  {
    id: 1,

    name: "Premium Black Hoodie",

    brand: "SHOPSE",

    badge: "Best Seller",

    category: "Hoodies",

    price: 120,

    originalPrice: 160,

    rating: 4.9,

    stock: 12,

    colors: [
      "Black",
      "Gray",
    ],

    sizes: [
      "S",
      "M",
      "L",
      "XL",
    ],

    description:
      "Luxury premium hoodie crafted with minimalist aesthetics and ultra-soft heavyweight cotton fabric.",

    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 2,

    name: "Oversized Cream Hoodie",

    brand: "SHOPSE",

    badge: "New Arrival",

    category: "Hoodies",

    price: 140,

    originalPrice: 190,

    rating: 4.8,

    stock: 9,

    colors: [
      "Cream",
      "White",
    ],

    sizes: [
      "M",
      "L",
      "XL",
    ],

    description:
      "Modern oversized hoodie with premium soft-touch luxury fabric and streetwear aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // SHOES

  {
    id: 3,

    name: "Modern White Sneakers",

    brand: "SHOPSE",

    badge: "Trending",

    category: "Shoes",

    price: 180,

    originalPrice: 240,

    rating: 4.9,

    stock: 15,

    colors: [
      "White",
      "Gray",
    ],

    sizes: [
      "40",
      "41",
      "42",
      "43",
    ],

    description:
      "Luxury modern sneakers designed for premium comfort and fashion-forward styling.",

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 4,

    name: "Minimal Black Sneakers",

    brand: "SHOPSE",

    badge: "Limited",

    category: "Shoes",

    price: 220,

    originalPrice: 280,

    rating: 4.8,

    stock: 7,

    colors: [
      "Black",
    ],

    sizes: [
      "41",
      "42",
      "43",
      "44",
    ],

    description:
      "Premium black sneakers crafted with modern streetwear luxury aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // JACKETS

  {
    id: 5,

    name: "Minimal Beige Jacket",

    brand: "SHOPSE",

    badge: "Premium",

    category: "Jackets",

    price: 260,

    originalPrice: 340,

    rating: 4.9,

    stock: 5,

    colors: [
      "Beige",
      "Brown",
    ],

    sizes: [
      "M",
      "L",
      "XL",
    ],

    description:
      "Elegant premium jacket crafted for modern luxury minimal fashion styling.",

    images: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 6,

    name: "Premium Leather Jacket",

    brand: "SHOPSE",

    badge: "Luxury",

    category: "Jackets",

    price: 340,

    originalPrice: 420,

    rating: 5.0,

    stock: 4,

    colors: [
      "Black",
      "Brown",
    ],

    sizes: [
      "M",
      "L",
      "XL",
    ],

    description:
      "Luxury leather jacket designed with timeless premium aesthetics and bold styling.",

    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // T-SHIRTS

  {
    id: 7,

    name: "Luxury Oversized T-Shirt",

    brand: "SHOPSE",

    badge: "Popular",

    category: "T-Shirts",

    price: 90,

    originalPrice: 120,

    rating: 4.7,

    stock: 18,

    colors: [
      "White",
      "Black",
    ],

    sizes: [
      "S",
      "M",
      "L",
      "XL",
    ],

    description:
      "Minimal oversized t-shirt crafted with premium luxury cotton fabric.",

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 8,

    name: "Classic White Tee",

    brand: "SHOPSE",

    badge: "Essential",

    category: "T-Shirts",

    price: 80,

    originalPrice: 110,

    rating: 4.6,

    stock: 20,

    colors: [
      "White",
    ],

    sizes: [
      "S",
      "M",
      "L",
    ],

    description:
      "Clean premium white t-shirt designed for timeless modern fashion.",

    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // WATCHES

  {
    id: 9,

    name: "Luxury Silver Watch",

    brand: "SHOPSE",

    badge: "Luxury",

    category: "Watches",

    price: 520,

    originalPrice: 650,

    rating: 5.0,

    stock: 3,

    colors: [
      "Silver",
    ],

    sizes: [
      "Standard",
    ],

    description:
      "Premium silver watch crafted with timeless luxury detailing and elegance.",

    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 10,

    name: "Modern Black Watch",

    brand: "SHOPSE",

    badge: "Exclusive",

    category: "Watches",

    price: 480,

    originalPrice: 590,

    rating: 4.9,

    stock: 6,

    colors: [
      "Black",
    ],

    sizes: [
      "Standard",
    ],

    description:
      "Elegant premium black watch designed with luxury modern detailing.",

    images: [
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // BAGS

  {
    id: 11,

    name: "Luxury Leather Bag",

    brand: "SHOPSE",

    badge: "Best Seller",

    category: "Bags",

    price: 320,

    originalPrice: 410,

    rating: 4.9,

    stock: 8,

    colors: [
      "Brown",
      "Black",
    ],

    sizes: [
      "Medium",
    ],

    description:
      "Premium leather handbag crafted with elegant luxury styling and modern functionality.",

    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 12,

    name: "Minimal Crossbody Bag",

    brand: "SHOPSE",

    badge: "Trending",

    category: "Bags",

    price: 260,

    originalPrice: 340,

    rating: 4.7,

    stock: 10,

    colors: [
      "Beige",
      "Black",
    ],

    sizes: [
      "Compact",
    ],

    description:
      "Modern crossbody bag designed with premium minimal aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

export default products;