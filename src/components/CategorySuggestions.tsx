import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../types';
import * as icons from 'lucide-react';

interface CategorySuggestionsProps {
  relatedCategories: Category[];
}

export default function CategorySuggestions({ relatedCategories }: CategorySuggestionsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Explore Related Categories
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {relatedCategories.map((category, index) => {
          const IconComponent = (icons as any)[category.icon];
          
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/category/${category.id}`} className="block h-full">
                <motion.div 
                  className={`h-full bg-${category.color}-50 dark:bg-${category.color}-900/20 
                           border border-${category.color}-200 dark:border-${category.color}-800
                           rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Discover more
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}