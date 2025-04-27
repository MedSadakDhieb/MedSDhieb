import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
   /*{
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern Portfolio with a sleek UI and Animations.',
    tags: ['React', 'UI/UX'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: '#'
  },
 {
    id: 2,
    title: 'Mobile Banking App',
    description: 'A secure and intuitive banking application focused on user experience.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    imageUrl: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: '#'
  },*/
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A creative portfolio showcasing a Designer & Developer\'s work with immersive galleries.',
    tags: ['React', 'Tailwind', 'Animation'],
    imageUrl: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: 'https://github.com/MedSadakDhieb/MedSDhieb'
  },
  /*{
    id: 4,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness application with workout plans and progress tracking.',
    tags: ['React', 'TypeScript', 'UI/UX'],
    imageUrl: 'https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: '#'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'An interactive weather application with beautiful visualizations and forecasts.',
    tags: ['React', 'API', 'UI/UX'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: '#'
  },
  {
    id: 6,
    title: 'Social Media App',
    description: 'A social platform with real-time messaging and content sharing capabilities.',
    tags: ['React', 'Node.js', 'Firebase'],
    imageUrl: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    link: '#'
  }*/
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const tags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(filter)));
    }
  }, [filter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsRef.current?.classList.add('animate-slide-up');
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
      id="projects" 
      ref={sectionRef}
      className="relative py-20 min-h-screen"
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div ref={projectsRef} className="opacity-0 transform translate-y-12 transition-all duration-1000">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 mx-auto"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my recent work across various domains and technologies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tag 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <a 
                        href={project.link} 
                        className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg hover:bg-white/30 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>View Project</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;