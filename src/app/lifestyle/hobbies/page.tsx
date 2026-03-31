'use client';

import { motion } from 'framer-motion';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';

const hobbies = [
  { name: 'Reading', description: 'Exploring new worlds through books.', icon: '📚' },
  { name: 'Coding', description: 'Building fun and experimental applications.', icon: '💻' },
  { name: 'Music', description: 'Listening to diverse genres and discovering new artists.', icon: '🎵' },
  { name: 'Travel', description: 'Experiencing different cultures and landscapes.', icon: '✈️' },
];

export default function HobbiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0f1a]">
      <TabNavigation />

      <section className="w-full pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hobbies & Interests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            What I enjoy outside of work and research
          </motion.p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{hobby.icon}</span>
                  <h2 className="text-lg font-bold text-white">{hobby.name}</h2>
                </div>
                <p className="text-slate-400 text-sm">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
