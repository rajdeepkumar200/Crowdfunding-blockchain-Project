import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, LifeBuoy } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Crowdfunding</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a></li>
                <li><a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">Use Cases</a></li>
                <li><a href="#transparency" className="text-gray-700 hover:text-blue-600 transition-colors">Transparency</a></li>
                <li><a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a></li>
              </ul>
            </nav>
            <Button variant="primary">Connect Wallet</Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors block py-2" onClick={() => setIsOpen(false)}>Features</a></li>
              <li><a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors block py-2" onClick={() => setIsOpen(false)}>How It Works</a></li>
              <li><a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors block py-2" onClick={() => setIsOpen(false)}>Use Cases</a></li>
              <li><a href="#transparency" className="text-gray-700 hover:text-blue-600 transition-colors block py-2" onClick={() => setIsOpen(false)}>Transparency</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors block py-2" onClick={() => setIsOpen(false)}>FAQ</a></li>
              <li className="pt-2"><Button variant="primary" fullWidth>Connect Wallet</Button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;