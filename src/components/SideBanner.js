import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SideBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-40 bg-white flex flex-col justify-between items-center py-4 overflow-hidden border-r-2 border-grey">
      <div className="w-full px-2 relative z-30">
        <button 
          onClick={toggleMenu} 
          className="text-black hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>
      
      <div 
        className={`absolute left-0 top-0 w-full h-full bg-white flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className={`flex flex-col space-y-8 text-center transition-opacity duration-500 font-serif`}>
          <Link to="/" className="text-black hover:text-gray-600 transition-colors text-m" onClick={toggleMenu}>HOME</Link>
          <Link to="/collaborations" className="text-black hover:text-gray-600 transition-colors text-m" onClick={toggleMenu}>COLLABORATIONS</Link>
          <Link to="/press" className="text-black hover:text-gray-600 transition-colors text-m" onClick={toggleMenu}>PRESS</Link>
          <Link to="/contact" className="text-black hover:text-gray-600 transition-colors text-m" onClick={toggleMenu}>CONTACT</Link>
        </nav>
      </div>
      
      <div className={`h-full flex items-center space-x-2 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div 
          className="text-black font-serif text-7xl bg-white px-2 [word-spacing:2rem]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          NICO LEONARD
        </div>
      </div>
    </div>
  );
};

export default SideBanner;