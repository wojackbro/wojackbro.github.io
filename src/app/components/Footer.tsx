'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Profile } from '../types/profile';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
      className="w-full bg-gray-900 text-white py-16 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              {profile.about.length > 150 
                ? `${profile.about.substring(0, 150)}...` 
                : profile.about}
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/about" className="text-blue-400 hover:text-blue-300 inline-flex items-center group">
                Learn more
                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center text-gray-300 hover:text-blue-300 transition-colors group"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 group-hover:bg-blue-800/50 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <span>{profile.email}</span>
              </a>
              
              <a 
                href={`tel:${profile.phone}`} 
                className="flex items-center text-gray-300 hover:text-blue-300 transition-colors group"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 group-hover:bg-blue-800/50 transition-colors">
                  <FaPhone className="w-4 h-4" />
                </span>
                <span>{profile.phone}</span>
              </a>
              
              <div className="flex items-center text-gray-300 group">
                <span className="inline-block w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </span>
                <span>L'Aquila, Italy</span>
              </div>
            </div>
          </motion.div>
          
          {/* Follow Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={profile.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <FaGlobe className="w-5 h-5" />
              </motion.a>
              
              {profile.socialLinks.facebook && (
                <motion.a
                  href={profile.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </motion.a>
              )}
              
              {profile.socialLinks.instagram && (
                <motion.a
                  href={profile.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
              )}
              
              {profile.socialLinks.scholar && (
                <motion.a
                  href={profile.socialLinks.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <SiGooglescholar className="w-5 h-5" />
                </motion.a>
              )}
            </div>
            
            <p className="text-gray-400 mt-4">
              Stay connected with me on social media
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with 💙 using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 