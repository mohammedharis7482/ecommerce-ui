import ProductCard from './ProductCard'

const products = [

  {
    id: 1,
    name: 'Premium Black T-Shirt',
    category: 'T-Shirts',
    price: 29,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },

  {
    id: 2,
    name: 'Modern Running Shoes',
    category: 'Shoes',
    price: 89,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },

  {
    id: 3,
    name: 'Casual Hoodie',
    category: 'Hoodies',
    price: 49,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234'
  },

  {
    id: 4,
    name: 'White Sneakers',
    category: 'Shoes',
    price: 79,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772'
  },

  {
    id: 5,
    name: 'Streetwear Tee',
    category: 'T-Shirts',
    price: 35,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1'
  },

  {
    id: 6,
    name: 'Urban Jacket',
    category: 'Jackets',
    price: 120,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
  }

]

function ProductGrid() {

  return (

    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-12">

        <h2 className="text-5xl font-bold mb-4">

          Featured Collections

        </h2>

        <p className="text-gray-500 text-lg">

          Modern fashion products curated for your lifestyle.

        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>

    </section>
  )
}

export default ProductGrid