import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import { categories } from './data';

function App() {
  const [darkMode, setDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedMode ? JSON.parse(savedMode) : prefersDark;
    }
    return false;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="relative">
          <div 
            className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]
                     dark:bg-[url('/grid-dark.svg')] pointer-events-none"
            style={{
              backgroundSize: '60px 60px',
              opacity: 0.4,
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10" />

          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {categories.map(category => (
                <Route
                  key={category.id}
                  path={`/category/${category.id}`}
                  element={<CategoryPage category={category} />}
                />
              ))}
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;