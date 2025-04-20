'use client';
import { motion } from 'framer-motion';
import { Profile } from '../types/profile';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {profile.about}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="text-gray-900 dark:text-white">{profile.location}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Nationality</h3>
                  <p className="text-gray-900 dark:text-white">{profile.nationality}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</h3>
                  <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {profile.email}
                  </a>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Phone</h3>
                  <a href={`tel:${profile.phone}`} className="text-gray-900 dark:text-white">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full overflow-hidden">
                  {/* Add your profile image here */}
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Currently</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {profile.education[1].degree}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {profile.education[1].institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 