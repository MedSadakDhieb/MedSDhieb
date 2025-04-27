export const getIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options = { threshold: 0.1 }
): IntersectionObserver => {
  return new IntersectionObserver(callback, options);
};

export const animateOnScroll = (
  elementRef: React.RefObject<HTMLElement>,
  animationClass: string
): (() => void) => {
  const observer = getIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && elementRef.current) {
        elementRef.current.classList.add(animationClass);
      }
    });
  });
  
  if (elementRef.current) {
    observer.observe(elementRef.current);
  }
  
  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };
};