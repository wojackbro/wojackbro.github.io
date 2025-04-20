/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { profileData } from '../../data/profile';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const socialIcons = {
  facebook: <FaFacebook className="w-8 h-8" />,
  instagram: <FaInstagram className="w-8 h-8" />,
  linkedin: <FaLinkedin className="w-8 h-8" />,
  github: <FaGithub className="w-8 h-8" />,
  website: <FaGlobe className="w-8 h-8" />,
  scholar: <SiGooglescholar className="w-8 h-8" />
};

export default function SocialMediaPage() {
  const links = Object.entries(profileData.socialLinks)
                     .filter(([_, value]) => Boolean(value));

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
            <h1 className="text-5xl font-bold mb-6">Connect With Me</h1>
            <p className="text-xl text-blue-200">
              Find me on various social media platforms and professional networks.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Social Links Grid */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map(([key, value], index) => (
              <motion.a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.3)", transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 text-blue-600 dark:text-blue-400">
                  {socialIcons[key as keyof typeof socialIcons] || <FaGlobe className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize mb-2">{key}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm break-all text-center">
                  {value.replace(/^https?:\/\//, '')}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer profile={profileData} />
    </main>
  );
} 