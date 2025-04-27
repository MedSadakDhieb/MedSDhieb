import React, { useEffect, useRef } from 'react';
import portrait from '../IMG_1241.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div ref={contentRef} className="opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 dark:from-blue-500 dark:to-cyan-400 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                src={portrait} 
                alt="Portrait" 
                className="w-full h-full object-cover"
/>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 dark:bg-cyan-500 rounded-full opacity-30 blur-2xl"></div>
            </div>
            
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Mohamed Sadak Dhieb
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm a passionate web designer and developer with a sharp eye for detail and a love for crafting beautiful, functional digital experiences. My journey began at ISET Sfax, where I honed both my creative instincts and technical skills.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in the perfect harmony of form and function — designing experiences that are not only visually stunning but also intuitive and impactful. By blending creativity with technical precision, I build solutions that captivate users and drive real results.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 text-white font-medium hover:opacity-90 transition-all duration-300 inline-block"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;