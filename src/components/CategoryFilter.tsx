import React from 'react';
import * as icons from 'lucide-react';
import { Category, CategoryStats } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  categoryStats: CategoryStats;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  categoryStats
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2
                   transform hover:scale-105 active:scale-95
                   ${!selectedCategory 
                     ? 'bg-blue-600 text-white shadow-lg' 
                     : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                   }`}
      >
        <span>All</span>
        <span className="text-sm opacity-75">({Object.values(categoryStats).reduce((a, b) => a + b, 0)})</span>
      </button>
      
      {categories.map(category => {
        const IconComponent = (icons as any)[category.icon];
        const count = categoryStats[category.id] || 0;
        
        if (!IconComponent) {
          console.warn(`Icon "${category.icon}" not found in lucide-react`);
          return null;
        }

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2
                       transform hover:scale-105 active:scale-95
                       ${selectedCategory === category.id 
                         ? 'bg-blue-600 text-white shadow-lg' 
                         : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                       }`}
          >
            <IconComponent className="h-5 w-5" />
            <span>{category.name}</span>
            <span className="text-sm opacity-75">({count})</span>
          </button>
        );
      })}
    </div>
  );
}