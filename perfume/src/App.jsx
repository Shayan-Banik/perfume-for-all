
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Loader from './components/Loadingscreen';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    
    <Router>

      <div className="app">
        <Loader />
        <Navbar />

         <ToastContainer position="top-center" />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <ProductList />
                <Contact />

              </>
            }
          />

          {/* Product Details Page */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
