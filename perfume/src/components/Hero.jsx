import { useState } from 'react';

export default function HeroSection() {
  const [bottleTransform, setBottleTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleBottleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setBottleTransform({ rotateX, rotateY });
  };

  const handleBottleMouseLeave = () => {
    setBottleTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section id='hero' className=" hero-bg min-h-screen  flex items-start relative overflow-hidden  pt-30 bg-black text-white scroll-smooth">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[12vw] font-serif font-bold z-0 pointer-events-none text-yellow-500">
        AURELIA
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="uppercase text-yellow-500 tracking-[0.3em] text-sm">Luxury Fragrance</div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            ETERNAL <span className="block text-yellow-500">ESSENCE</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
            Discover the art of luxury perfumery with our signature fragrance. 
            A harmonious blend of rare florals and precious woods, crafted for the discerning individual.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-yellow-500"></div>
              <span className="text-yellow-500 text-sm tracking-wide">EST. 2025</span>
            </div>

            <button
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group border-2 border-yellow-500 text-yellow-500 px-8 py-4 text-sm uppercase transition-all hover:bg-yellow-500 hover:text-black"
            >
              Explore Collection <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Bottle Section */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative cursor-pointer"
            onMouseMove={handleBottleMouseMove}
            onMouseLeave={handleBottleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${bottleTransform.rotateX}deg) rotateY(${bottleTransform.rotateY}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
              alt="Luxury perfume bottle"
              className="w-80 md:w-96 h-auto transition-transform duration-700 hover:scale-105"
            />

            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
              alt="Secondary bottle"
              className="absolute -left-20 top-20 opacity-40 transform rotate-12 scale-75"
            />

            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
              alt="Decorative bottle"
              className="absolute -right-16 top-32 opacity-30 transform -rotate-6 scale-60"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
