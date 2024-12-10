import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
    { to: '/api-data', label: 'API Data' }, 
  ];

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-lg p-3">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <span className="text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              JTech Solutions
            </span>
          </span>
        </a>

        {/* Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark focus:outline-none text-2xl hover:scale-110 transform transition-transform duration-300"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg font-medium transition-all duration-300 relative group ${
                activeLink === link.to
                  ? 'text-primary'
                  : 'text-dark hover:text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                  activeLink === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-14 right-4 bg-white shadow-lg rounded-lg border border-gray-200 w-48 z-50"
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-lg font-medium transition-all duration-300 
                      ${activeLink === link.to 
                        ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent' 
                        : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;