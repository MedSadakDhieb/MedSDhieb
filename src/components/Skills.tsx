import React, { useEffect, useRef } from 'react';
import { Code2, Palette, Server, Lightbulb, Rocket, Laptop } from 'lucide-react';

const skills = [
  {
    category: 'Development',
    icon: <Code2 size={24} />,
    skills: ['React', 'Python', 'c','JavaScript', 'Python','Bootstrap'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    category: 'Design',
    icon: <Palette size={24} />,
    skills: ['UI/UX Design', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Backend Development',
    icon: <Server size={24} />,
    skills: ['MySQL', 'PHP'],
    color: 'from-green-500 to-emerald-400'
  },

];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsRef.current?.classList.add('animate-slide-up');
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
      id="skills" 
      ref={sectionRef}
      className="relative py-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div ref={skillsRef} className="opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my technical expertise and creative abilities across various domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((category) => (
              <div 
                key={category.category}
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {category.category}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;