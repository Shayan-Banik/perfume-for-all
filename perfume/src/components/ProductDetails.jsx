
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'Mystic Bloom',
    category: 'Unisex',
    image: 'https://images.unsplash.com/photo-1585218356022-6a53145f56f6?w=600&auto=format&fit=crop&q=60',
    price: 120,
    description: 'A refreshing floral scent that lingers throughout the day.',
    notes: {
      top: 'Bergamot, Lemon',
      heart: 'Rose, Jasmine',
      base: 'Musk, Amber',
    },
  },
  {
    id: '2',
    name: 'Ocean Mist',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1632495112970-30ce8340c2be?w=600&auto=format&fit=crop&q=60',
    price: 95,
    description: 'Cool aquatic fragrance inspired by ocean breeze.',
    notes: {
      top: 'Sea Salt, Mint',
      heart: 'Lavender, Geranium',
      base: 'Cedar, Ambergris',
    },
  },
  {
    id: '3',
    name: 'Rose Whisper',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1737424065216-bc51dd626175?q=80&w=1974&auto=format&fit=crop',
    price: 130,
    description: 'Soft romantic scent with a touch of elegance.',
    notes: {
      top: 'Pear, Lychee',
      heart: 'Rose, Peony',
      base: 'Vanilla, Sandalwood',
    },
  },
  {
    id: '4',
    name: 'Vanilla Sky',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&auto=format&fit=crop&q=60',
    price: 69,
    description: 'Soft romantic scent with a touch of elegance.',
    notes: {
      top: 'Pear, Lychee',
      heart: 'Rose, Peony',
      base: 'Vanilla, Sandalwood',
    },
  },
  {
    id: '5',
    name: 'Citrus Zest',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=60',
    price: 105,
    description: 'Soft romantic scent with a touch of elegance.',
    notes: {
      top: 'Pear, Lychee',
      heart: 'Rose, Peony',
      base: 'Vanilla, Sandalwood',
    },
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const [addedToCart, setAddedToCart] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  if (!product) return <div className="text-white p-10">Product not found</div>;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setShowForm(false);
    setOrderConfirmed(false);
  };

  const handleBuyNow = () => {
    setShowForm(true);
    setAddedToCart(false);
    setOrderConfirmed(false);
  };

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOrderConfirmed(true);
    setShowForm(false);
    setFormData({ name: '', address: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-20">
      <button
        onClick={() => navigate(-1)}
        className="text-yellow-400 underline mb-4 inline-block"
      >
        ← Back to Products
      </button>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-sm text-gray-400 mb-4">{product.category}</p>
          <p className="text-yellow-400 text-2xl font-bold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>

          <div className="space-y-2 mb-6">
            <p><strong>Top Notes:</strong> {product.notes.top}</p>
            <p><strong>Heart Notes:</strong> {product.notes.heart}</p>
            <p><strong>Base Notes:</strong> {product.notes.base}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-yellow-400 text-black rounded shadow hover:bg-yellow-300"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-4 py-2 bg-yellow-400 text-black rounded shadow hover:bg-yellow-300"
            >
              Buy Now
            </button>
          </div>

          {addedToCart && (
            <div className="mt-4 text-green-400 font-semibold">
              ✅ Added to Cart: {product.name}
            </div>
          )  
          }

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-6 bg-gray-800 p-4 rounded space-y-3"
            >
              <h3 className="text-lg font-semibold">Enter your details</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300"
              >
                Submit Order
              </button>
            </form>
          )}

          {orderConfirmed && (
            <div className="mt-4 text-green-500 font-semibold">
              ✅ Order Registered Successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

