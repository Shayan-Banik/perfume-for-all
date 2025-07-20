
import './Features.css';

const features = [
  {
    title: 'Long-lasting Aroma',
    description: 'Stay fresh all day with our enduring fragrance blend.',
    icon: '🕰️',
  },
  {
    title: 'Premium Ingredients',
    description: 'Crafted with rare essential oils and natural extracts.',
    icon: '🌿',
  },
  {
    title: 'Cruelty-Free',
    description: 'No animal testing – 100% ethical and vegan.',
    icon: '🐰',
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section scroll-smooth">
      <h2 className="section-title ">Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;




  