import React from 'react';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent mb-6"
          >
            Portfolio
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-300 transition-colors">Contact</a>
          </div>
          
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-1">Crafted with passion and creativity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;