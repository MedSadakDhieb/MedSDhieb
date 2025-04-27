import React, { useEffect, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (hidden) setHidden(false);
      
      // Check if hovering over a button or link
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!element?.closest('button, a, input, textarea, [role="button"]'));
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hidden]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`rounded-full border-2 border-blue-100 transition-all duration-300 ${
            clicked ? 'w-8 h-8 border-4' : hovering ? 'w-16 h-16' : 'w-6 h-6'
          }`}
        ></div>
      </div>
      
      <div 
        className={`fixed pointer-events-none z-40 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md transition-all duration-500 ease-out ${
          hidden ? 'opacity-0' : hovering ? 'opacity-40 w-24 h-24' : 'w-16 h-16'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDuration: '0.8s',
        }}
      ></div>
    </>
  );
};

export default MouseFollower;