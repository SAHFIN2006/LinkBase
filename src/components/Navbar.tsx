import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Moon, Sun, Github } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled 
                  ? 'bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50' 
                  : 'bg-transparent'} 
                backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-10 h-10 flex items-center justify-center rounded-xl
                       bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600
                       shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold text-white">L</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 animate-pulse" />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600
                       dark:from-blue-400 dark:to-purple-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              LinkBase
            </motion.span>
          </Link>

          <div className="flex items-center space-x-3">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200
                       ${darkMode 
                         ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                         : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              href="https://github.com/SAHFIN2006/LinkBase"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200
                       ${darkMode 
                         ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                         : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}