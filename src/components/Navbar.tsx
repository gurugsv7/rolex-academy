import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <School className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Rolex Academy</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">Programs</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Programs</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Events</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;