'use client';

import { motion } from 'framer-motion';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { profileData } from '../../data/profile';

export default function HobbiesPage() {
  // Placeholder for hobbies content
  const hobbies = [
    { name: 'Reading', description: 'Exploring new worlds through books.', icon: '📚' },
    { name: 'Coding Personal Projects', description: 'Building fun and experimental applications.', icon: '💻' },
    { name: 'Music', description: 'Listening to diverse genres and discovering new artists.', icon: '🎵' },
    { name: 'Travel', description: 'Experiencing different cultures and landscapes.', icon: '✈️' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      
      {/* Header */}
      <section className="w-full py-32 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Hobbies & Interests</h1>
            <p className="text-xl text-blue-200">
              Activities I enjoy outside of my professional and academic life.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Hobbies Content */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.2)", transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{hobby.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{hobby.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: hobbies.length * 0.1 }}
            className="mt-16 text-center text-gray-700 dark:text-gray-300"
          >
            <p>More content about my hobbies will be added soon!</p>
          </motion.div>
        </div>
      </section>
      
      <Footer profile={profileData} />
    </main>
  );
} 