import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 dark:bg-black/10 backdrop-blur-lg py-2 shadow-lg'
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
        >
          Med.S.Dhieb
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 dark:after:from-blue-400 dark:after:to-cyan-300 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;