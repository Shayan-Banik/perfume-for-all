
import './Contact.css';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  
  return (

    <section id='contact' className="contact-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">We'd love to hear from you!</p>
      <div className="bg-zinc-200 rounded-2xl shadow-xl w-full max-w-xl p-8">
        {!sent ? (
          <form
            action="https://formspree.io/f/xgeglqoa"
            method="POST"
            onSubmit={() => setSent(true)}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Contact Us
            </h2>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold text-xl">
            ✅ Your message has been sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

