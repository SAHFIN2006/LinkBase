import { Category, TechLink, MediaContent } from './types';

export const categories: Category[] = [
  { id: 'ai', name: 'Artificial Intel.', icon: 'Brain', color: 'blue' },
  { id: 'blockchain', name: 'Blockchain', icon: 'Link', color: 'indigo' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: 'Shield', color: 'purple' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2', color: 'pink' },
  { id: 'ml', name: 'Machine Learning', icon: 'Network', color: 'red' },
  { id: 'nanotech', name: 'Nanotech', icon: 'Atom', color: 'orange' },
  { id: 'programming', name: 'Programming', icon: 'Code', color: 'yellow' },
  { id: 'statistics', name: 'Statistics', icon: 'LineChart', color: 'green' },
  { id: 'data-science', name: 'Data Science', icon: 'Database', color: 'teal' },
  { id: 'robotics', name: 'Robotics', icon: 'Bot', color: 'cyan' },
  { id: 'software', name: 'Software', icon: 'Code2', color: 'sky' },
  { id: 'hardware', name: 'Hardware', icon: 'Cpu', color: 'rose' }
];

// Initial media content
export const initialMediaContent: MediaContent[] = [
  {
    id: '1',
    title: 'Tech Insights',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=example1',
    description: 'Latest insights in technology',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
  },
  {
    id: '2',
    title: 'Coding Tutorials',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=example2',
    description: 'Programming tutorials for beginners',
    category: 'programming',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  }
];

// Helper function to get related categories
export const getRelatedCategories = (categoryId: string): Category[] => {
  const relatedMap: { [key: string]: string[] } = {
    'ai': ['ml', 'data-science', 'programming'],
    'blockchain': ['cybersecurity', 'programming', 'software'],
    'cybersecurity': ['blockchain', 'software', 'programming'],
    'gaming': ['software', 'programming', 'hardware'],
    'ml': ['ai', 'data-science', 'statistics'],
    'nanotech': ['robotics', 'hardware', 'ai'],
    'programming': ['software', 'ai', 'data-science'],
    'statistics': ['data-science', 'ml', 'ai'],
    'data-science': ['ml', 'ai', 'statistics'],
    'robotics': ['hardware', 'ai', 'software'],
    'software': ['programming', 'hardware', 'cybersecurity'],
    'hardware': ['robotics', 'software', 'nanotech']
  };

  return (relatedMap[categoryId] || [])
    .map(id => categories.find(cat => cat.id === id))
    .filter((cat): cat is Category => cat !== undefined);
};

export const initialTechLinks: TechLink[] = [
  {
    id: '1',
    name: 'OpenAI',
    description: 'Leading artificial intelligence research laboratory',
    url: 'https://openai.com',
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'GPT'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '2',
    name: 'TensorFlow',
    description: 'Open-source machine learning framework',
    url: 'https://tensorflow.org',
    category: 'ml',
    tags: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '3',
    name: 'Hugging Face',
    description: 'The AI community building the future',
    url: 'https://huggingface.co',
    category: 'ml',
    tags: ['NLP', 'Transformers', 'Machine Learning'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '4',
    name: 'GitHub',
    description: 'Where the world builds software',
    url: 'https://github.com',
    category: 'software',
    tags: ['Version Control', 'Collaboration', 'Open Source'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '5',
    name: 'Kaggle',
    description: 'Data science and machine learning community',
    url: 'https://kaggle.com',
    category: 'data-science',
    tags: ['Data Science', 'Machine Learning', 'Competitions'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '6',
    name: 'Discord',
    description: 'Modern communication platform',
    url: 'https://discord.com',
    category: 'software',
    tags: ['Communication', 'Community', 'Chat'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '7',
    name: 'Arduino',
    description: 'Open-source electronics platform',
    url: 'https://arduino.cc',
    category: 'hardware',
    tags: ['Electronics', 'Programming', 'DIY'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '8',
    name: 'Raspberry Pi',
    description: 'Small single-board computers',
    url: 'https://raspberrypi.org',
    category: 'hardware',
    tags: ['Computing', 'DIY', 'Education'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '9',
    name: 'Twitch',
    description: 'Live streaming platform for gamers',
    url: 'https://twitch.tv',
    category: 'gaming',
    tags: ['Streaming', 'Gaming', 'Entertainment'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '10',
    name: 'Steam',
    description: 'Digital game distribution platform',
    url: 'https://store.steampowered.com',
    category: 'gaming',
    tags: ['Games', 'Digital Distribution', 'PC Gaming'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '11',
    name: 'Blockchain.com',
    description: 'Cryptocurrency and blockchain platform',
    url: 'https://blockchain.com',
    category: 'blockchain',
    tags: ['Cryptocurrency', 'Blockchain', 'Finance'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '12',
    name: 'Stack Overflow',
    description: 'Developer knowledge sharing platform',
    url: 'https://stackoverflow.com',
    category: 'programming',
    tags: ['Q&A', 'Coding', 'Development'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '13',
    name: 'HackerOne',
    description: 'Bug bounty and vulnerability coordination platform',
    url: 'https://hackerone.com',
    category: 'cybersecurity',
    tags: ['Security', 'Bug Bounty', 'Hacking'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '14',
    name: 'Boston Dynamics',
    description: 'Advanced robotics company',
    url: 'https://bostondynamics.com',
    category: 'robotics',
    tags: ['Robotics', 'Engineering', 'Technology'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '15',
    name: 'Nano.gov',
    description: 'National Nanotechnology Initiative',
    url: 'https://nano.gov',
    category: 'nanotech',
    tags: ['Nanotechnology', 'Research', 'Science'],
    stars: 0,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  }
];