import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-opacity-20 backdrop-blur-sm transition-all duration-500 hover:scale-110"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 transition-all duration-500">
        {theme === 'dark' ? (
          <Sun className="absolute inset-0 text-yellow-300 animate-spin-slow" />
        ) : (
          <Moon className="absolute inset-0 text-blue-500 animate-pulse" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;