import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import './index.css'

import Home from './home.tsx';
import CaseStudyPage from './components/CaseStudy.tsx';
import useCanvasCursor from './components/Cursor.tsx';  

// Simple component to fix the "scroll to top" issue when changing pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;  
}

function App() {
  useCanvasCursor();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bgElement = document.querySelector('.parallax-bg') as HTMLElement;

      if (bgElement) {
        bgElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;

      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="site-root">

        <div className="parallax-bg" />
        <div className="parallax-gradient" /> 

        <canvas id="canvas" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:projectId" element={<CaseStudyPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;