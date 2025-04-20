'use client';

import TabNavigation from '../components/TabNavigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import { FaGamepad, FaMusic, FaBookOpen, FaPlaneDeparture, FaUsers } from 'react-icons/fa';

export default function LifestylePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      
      {/* Lifestyle Header */}
      <section className="w-full py-32 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url(/images/queen.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Lifestyle</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400"
            >
              Beyond the screen, I find joy in exploring diverse interests that enrich my life. It&apos;s all about balance and continuous learning, both in and out of the tech world.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Lifestyle Content */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Social Media</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Connect with me across various social media platforms and see what I'm up to in my everyday life.
                </p>
                <Link href="/lifestyle/social">
                  <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    View Social Profiles
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hobbies & Interests</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Discover my passion for activities outside of work - from reading and music to travel and more.
                </p>
                <Link href="/lifestyle/hobbies">
                  <div className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    Explore Hobbies
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer profile={profileData} />
    </main>
  );
} 