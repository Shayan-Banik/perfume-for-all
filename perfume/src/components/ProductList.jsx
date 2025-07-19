
// ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: '1',
    name: 'Mystic Bloom',
    category: 'Unisex',
    image: 'https://images.unsplash.com/photo-1585218356022-6a53145f56f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtdXxlbnwwfHwwfHx8MA%3D%3D',
    price: 120,
  },
  {
    id: '2',
    name: 'Ocean Mist',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1632495112970-30ce8340c2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtdXxlbnwwfHwwfHx8MA%3D%3D',
    price: 95,
  },
  {
    id: '3',
    name: 'Rose Whisper',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1737424065216-bc51dd626175?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 130,
  },
  {
    id: '4',
    name: 'Vanilla Sky',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D',
    price: 69,
  },
  {
    id: '5',
    name: 'Citrus Zest',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D',
    price: 105,
  },
];

export default function ProductList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="products" className="min-h-screen bg-gray-900 text-white py-22 px-6 font-serif ">
      <h1 className="text-4xl font-bold text-center mb-12 text-yellow-400">Explore Our Perfumes</h1>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="px-3">
              <Link
                to={`/product/${product.id}`}
                className="block bg-gray-800 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-serif">{product.name}</h2>
                  <p className="text-sm text-gray-400">{product.category}</p>
                  <p className="mt-2 text-lg font-bold text-yellow-400">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
