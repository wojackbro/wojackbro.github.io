'use client';

import TabNavigation from '../components/TabNavigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import Image from 'next/image';

export default function PublicationsPage() {
  const publications = profileData.publications;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      
      {/* Publications Header */}
      <section className="w-full py-32 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url(/images/batman3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl text-blue-200">
              Academic papers, research articles, and other scholarly contributions.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Publications List */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="flex-1">
                    <Link 
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {publication.title}
                      </h3>
                    </Link>
                    
                    <div className="text-gray-600 dark:text-gray-300 mb-4">
                      <p className="line-clamp-3">{publication.authors.join(', ')}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {publication.date}
                      </span>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Read Paper
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Citation Info */}
      {profileData.socialLinks.scholar && (
        <section className="w-full py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">More Publications</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              For a complete list of publications and citation metrics, please visit my Google Scholar profile.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href={profileData.socialLinks.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Google Scholar Profile
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer profile={profileData} />
    </main>
  );
} 