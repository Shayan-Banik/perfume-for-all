
import './Navbar.css';
import { useAuth } from '../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // close menu on click
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">✨ Luxury Fragrance</div>

      <button
        className="hamburger md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
        <li><a onClick={() => scrollToSection('features')}>Features</a></li>
        <li><a onClick={() => scrollToSection('products')}>Products</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        {!user ? (
          <>
            <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</Link></li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
