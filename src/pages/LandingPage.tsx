import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { categories } from '../data';
import * as icons from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-xl opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <h1 className="relative text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-600 to-purple-600
                         dark:from-blue-400 dark:to-purple-400 mb-6">
                Hall Of Resources
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Your portal to a vast ocean of insight.Forge your journey
              in to the future of innovation and discovery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <Link
                to="/category/ai"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 
                         bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
                         hover:from-blue-500 hover:to-purple-500 
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30"
              >
                <span className="relative text-base font-medium text-white">
                  Start Exploring
                </span>
                <ArrowRight className="w-4 h-4 text-white transition-transform 
                                   group-hover:translate-x-1" />
                <motion.span
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="relative py-20 px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     dark:from-blue-400 dark:to-purple-400 mb-16"
          >
            Explore Categories
          </motion.h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = (icons as any)[category.icon];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/category/${category.id}`}>
                    <motion.div
                      className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 
                               backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50
                               hover:bg-white dark:hover:bg-gray-800 
                               transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      <motion.div 
                        className="relative flex items-center gap-4"
                        initial={false}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Explore resources
                          </p>
                        </div>
                        <motion.div
                          className="absolute right-4 opacity-0 group-hover:opacity-100
                                   transition-opacity duration-300"
                          initial={false}
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}