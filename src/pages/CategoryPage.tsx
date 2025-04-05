import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, Users, Link as LinkIcon, Clock, Bookmark, Share2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import LinkCard from '../components/LinkCard';
import AddLinkModal from '../components/AddLinkModal';
import CategorySuggestions from '../components/CategorySuggestions';
import MediaSection from '../components/MediaSection';
import { initialTechLinks, getRelatedCategories, initialMediaContent } from '../data';

interface CategoryPageProps {
  category: Category;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [techLinks, setTechLinks] = React.useState(() => {
    const saved = localStorage.getItem('techLinks');
    return saved ? JSON.parse(saved) : initialTechLinks;
  });
  const [mediaContent, setMediaContent] = React.useState(() => {
    const saved = localStorage.getItem('mediaContent');
    return saved ? JSON.parse(saved) : initialMediaContent;
  });

  const relatedCategories = getRelatedCategories(category.id);

  React.useEffect(() => {
    localStorage.setItem('techLinks', JSON.stringify(techLinks));
  }, [techLinks]);

  React.useEffect(() => {
    localStorage.setItem('mediaContent', JSON.stringify(mediaContent));
  }, [mediaContent]);

  const handleStarLink = (linkId: string) => {
    setTechLinks(prevLinks =>
      prevLinks.map(link =>
        link.id === linkId
          ? { ...link, stars: link.stars + (link.starred ? -1 : 1), starred: !link.starred }
          : link
      )
    );
  };

  const handleDeleteLink = (linkId: string) => {
    setTechLinks(prevLinks => prevLinks.filter(link => link.id !== linkId));
  };

  const handleAddMedia = (formData: any) => {
    const newMedia = {
      id: crypto.randomUUID(),
      ...formData,
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
    };
    setMediaContent(prev => [...prev, newMedia]);
  };

  const filteredLinks = techLinks.filter(link => {
    const matchesCategory = link.category === category.id;
    const matchesSearch = !searchQuery || 
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = {
    resources: filteredLinks.length,
    users: Math.floor(Math.random() * 1000) + 500,
    trending: Math.floor(Math.random() * 20) + 1
  };

  const StatCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string | number }) => (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 backdrop-blur-sm
                 border border-gray-200/50 dark:border-gray-700/50"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400
                 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200
                 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                 border border-gray-200 dark:border-gray-700 shadow-sm"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </motion.button>

      <div className="mb-12">
        <motion.h1 
          className="text-4xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     dark:from-blue-400 dark:to-purple-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category.name} Resources
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover the best {category.name.toLowerCase()} tools and platforms
        </motion.p>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        <StatCard icon={LinkIcon} label="Total Resources" value={stats.resources} />
        <StatCard icon={Users} label="Active Users" value={stats.users} />
        <StatCard icon={TrendingUp} label="Trending Resources" value={stats.trending} />
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder={`Search ${category.name.toLowerCase()} resources...`}
          />
        </div>

        <motion.button
          onClick={() => setIsAddModalOpen(true)}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                   rounded-lg hover:from-blue-700 hover:to-purple-700
                   transition-all duration-300 flex items-center justify-center space-x-2 
                   shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Resource
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLinks.map((link, index) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LinkCard
              link={link}
              onStar={() => handleStarLink(link.id)}
              onDelete={() => handleDeleteLink(link.id)}
            />
          </motion.div>
        ))}
      </div>

      <MediaSection 
        mediaContent={mediaContent.filter(m => m.category === category.id)}
        onAddMedia={handleAddMedia}
      />

      <CategorySuggestions relatedCategories={relatedCategories} />

      <AddLinkModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={(formData) => {
          const newLink = {
            id: crypto.randomUUID(),
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()),
            stars: 0,
            starred: false
          };
          setTechLinks(prev => [...prev, newLink]);
        }}
      />
    </motion.div>
  );
}