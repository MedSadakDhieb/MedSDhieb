import React, { useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-title');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 animate-gradient"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-blue-300 dark:bg-blue-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 top-1/3 right-1/4 bg-blue-400 dark:bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bottom-0 right-0 bg-blue-500 dark:bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white opacity-0 transform translate-y-12"
        >
          <span className="block mb-2">Hello, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 dark:from-blue-100 dark:to-white">
            Med Sadak Dhieb
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          A creative <span className="font-bold text-white">designer</span> and passionate <span className="font-bold text-white">developer</span> crafting beautiful digital experiences.
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in animation-delay-700">
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Based in Sfax , Tun.</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-2 text-white/90">
            <Briefcase className="w-5 h-5" />
            <span>IT Student At ISET SFAX.</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-1000">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-white text-blue-700 dark:text-blue-900 font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;