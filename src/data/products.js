const products = [

  // HOODIES

  {
    id: 1,

    name: "Premium Black Hoodie",

    category: "Hoodies",

    price: 120,

    rating: 4.9,

    description:
      "Luxury premium hoodie crafted with minimalist aesthetics and ultra-soft cotton fabric.",

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 2,

    name: "Oversized Cream Hoodie",

    category: "Hoodies",

    price: 140,

    rating: 4.8,

    description:
      "Modern oversized hoodie with premium soft-touch fabric and luxury styling.",

    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // SHOES

  {
    id: 3,

    name: "Modern White Sneakers",

    category: "Shoes",

    price: 180,

    rating: 4.9,

    description:
      "Luxury modern sneakers designed for premium comfort and fashion.",

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 4,

    name: "Minimal Black Sneakers",

    category: "Shoes",

    price: 220,

    rating: 4.8,

    description:
      "Premium black sneakers with luxury streetwear aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // JACKETS

  {
    id: 5,

    name: "Minimal Beige Jacket",

    category: "Jackets",

    price: 260,

    rating: 4.9,

    description:
      "Elegant premium jacket crafted for modern luxury fashion.",

    images: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 6,

    name: "Premium Leather Jacket",

    category: "Jackets",

    price: 340,

    rating: 5.0,

    description:
      "Luxury leather jacket designed with modern premium aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",

      "https://unsplash.com/photos/man-in-brown-chttps://unsplash.com/photos/man-wearing-black-the-north-face-bubble-jacket-3azXYMg-Y8ooat-standing-beside-gray-concrete-wall-during-daytime-2cmLR_I_hn0",
    ],
  },

  // T-SHIRTS

  {
    id: 7,

    name: "Luxury Oversized T-Shirt",

    category: "T-Shirts",

    price: 90,

    rating: 4.7,

    description:
      "Minimal oversized t-shirt with premium luxury cotton fabric.",

    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 8,

    name: "Classic White Tee",

    category: "T-Shirts",

    price: 80,

    rating: 4.6,

    description:
      "Clean premium white t-shirt for modern minimal fashion.",

    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // WATCHES

  {
    id: 9,

    name: "Luxury Silver Watch",

    category: "Watches",

    price: 520,

    rating: 5.0,

    description:
      "Premium silver watch crafted with timeless luxury aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 10,

    name: "Modern Black Watch",

    category: "Watches",

    price: 480,

    rating: 4.9,

    description:
      "Elegant black premium watch with luxury detailing.",

    images: [
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // BAGS

  {
    id: 11,

    name: "Luxury Leather Bag",

    category: "Bags",

    price: 320,

    rating: 4.9,

    description:
      "Premium leather handbag crafted with elegant luxury styling.",

    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  {
    id: 12,

    name: "Minimal Crossbody Bag",

    category: "Bags",

    price: 260,

    rating: 4.7,

    description:
      "Modern crossbody bag with luxury minimal design aesthetics.",

    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

export default products;