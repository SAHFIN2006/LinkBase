import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Podcast, Book, Plus, X } from 'lucide-react';
import ReactPlayer from 'react-player';
import { MediaContent, AddMediaFormData } from '../types';
import { categories } from '../data';

interface MediaSectionProps {
  mediaContent: MediaContent[];
  onAddMedia: (media: AddMediaFormData) => void;
}

export default function MediaSection({ mediaContent, onAddMedia }: MediaSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeType, setActiveType] = useState<'youtube' | 'podcast' | 'blog'>('youtube');
  const [formData, setFormData] = useState<AddMediaFormData>({
    title: '',
    type: 'youtube',
    url: '',
    description: '',
    category: categories[0].id,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMedia(formData);
    setIsModalOpen(false);
    setFormData({
      title: '',
      type: 'youtube',
      url: '',
      description: '',
      category: categories[0].id,
    });
  };

  const getTypeIcon = (type: 'youtube' | 'podcast' | 'blog') => {
    switch (type) {
      case 'youtube':
        return <Play className="h-5 w-5" />;
      case 'podcast':
        return <Podcast className="h-5 w-5" />;
      case 'blog':
        return <Book className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-3xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-500 to-blue-700
                     dark:from-blue-400 dark:to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Media Resources
          </motion.h2>
          
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 
                     text-white rounded-lg flex items-center space-x-2
                     hover:from-blue-600 hover:to-blue-800
                     transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-5 w-5" />
            <span>Add Media</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaContent.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden
                       shadow-lg hover:shadow-xl transition-all duration-300
                       border border-gray-200 dark:border-gray-700"
            >
              <div className="relative aspect-video">
                {media.type === 'youtube' ? (
                  <ReactPlayer
                    url={media.url}
                    width="100%"
                    height="100%"
                    light={media.thumbnail}
                    playing={false}
                  />
                ) : (
                  <img 
                    src={media.thumbnail} 
                    alt={media.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-2 right-2 bg-blue-500 text-white
                             rounded-full p-2 shadow-lg">
                  {getTypeIcon(media.type)}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {media.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {media.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Media Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
               onClick={() => setIsModalOpen(false)} />
          
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-white dark:bg-gray-800 
                       rounded-xl shadow-2xl p-6"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500
                         dark:text-gray-500 dark:hover:text-gray-400"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Add New Media
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Media Type
                  </label>
                  <div className="flex space-x-2">
                    {(['youtube', 'podcast', 'blog'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setActiveType(type);
                          setFormData({ ...formData, type });
                        }}
                        className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center space-x-2
                                 ${activeType === type 
                                   ? 'bg-blue-500 text-white' 
                                   : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                 }`}
                      >
                        {getTypeIcon(type)}
                        <span className="capitalize">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    URL
                  </label>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700
                         text-white rounded-lg hover:from-blue-600 hover:to-blue-800
                         transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Media
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}