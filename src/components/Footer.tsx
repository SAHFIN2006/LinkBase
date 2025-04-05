import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Disc as Discord, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SAHFIN2006', label: 'GitHub', id: '@SAHFIN2006' },
    { icon: Twitter, href: 'https://twitter.com/_SAHFIN_', label: 'X (Twitter)', id: '@_SAHFIN_' },
    { icon: Linkedin, href: 'www.linkedin.com/in/sahfin-rahman-42b90330a', label: 'LinkedIn', id: '/in/sahfin-rahman-42b90330a' },
    { icon: Mail, href: 'sahfin2006@gmail.com', label: 'Email', id: 'sahfin2006@gmail.com' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-blue-50 
                     dark:from-gray-900 dark:to-blue-900/20 
                     border-t border-blue-100 dark:border-blue-900">
      <div 
        className="absolute inset-0 bg-grid-blue-500/[0.05] bg-[size:20px_20px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='19' height='19' stroke='%234B5563' stroke-opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-3xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-500 to-blue-700
                       dark:from-blue-400 dark:to-blue-600 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              LinkBase
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Your gateway to the best technology resources, curated for developers and tech enthusiasts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, href, label, id }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20
                               text-blue-600 dark:text-blue-400 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                      {label}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {id}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-200 dark:border-blue-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} LinkBase. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <motion.a
                href="https://portfolio.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg
                         bg-blue-500/10 hover:bg-blue-500/20 
                         text-blue-600 dark:text-blue-400
                         transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium">Portfolio</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}