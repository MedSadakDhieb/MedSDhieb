import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 dark:border-t-blue-400 border-gray-200 dark:border-gray-700 animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Loading...
            </h2>
          </div>
        </div>
      ) : (
        <div className="relative">
          <MouseFollower />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;