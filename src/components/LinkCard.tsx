import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Copy, Share2, Trash2 } from 'lucide-react';
import { TechLink } from '../types';

interface LinkCardProps {
  link: TechLink;
  onStar: () => void;
  onDelete: () => void;
}

export default function LinkCard({ link, onStar, onDelete }: LinkCardProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link.url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: link.name,
          text: link.description,
          url: link.url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                 border border-gray-200 dark:border-gray-700 h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
            {link.name}
          </h3>
          <div className="flex space-x-1">
            <motion.button 
              onClick={onStar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition-colors duration-200
                       ${link.starred ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'}`}
            >
              <Star className="h-4 w-4" />
            </motion.button>
            <motion.button 
              onClick={onDelete}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 
                       text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400
                       transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {link.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {link.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                       rounded-full text-xs font-medium transition-colors duration-200
                       hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
            <Star className="h-3.5 w-3.5" />
            <span>{link.stars}</span>
          </div>
          
          <div className="flex space-x-1">
            <motion.button 
              onClick={handleCopyLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                       text-gray-500 dark:text-gray-400 transition-colors duration-200"
              title="Copy link"
            >
              <Copy className="h-4 w-4" />
            </motion.button>
            <motion.button 
              onClick={handleShare}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                       text-gray-500 dark:text-gray-400 transition-colors duration-200"
              title="Share"
            >
              <Share2 className="h-4 w-4" />
            </motion.button>
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="h-3.5 w-3.5 mr-1" />
              Visit
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}