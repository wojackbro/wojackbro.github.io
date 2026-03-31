'use client';

import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GamesPage() {
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
            Games
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Interactive experiences and fun projects
          </motion.p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/games/racing-game"
              className="px-8 py-4 glass-card rounded-xl text-white font-semibold text-center hover:border-cyan-500/30 transition-all"
            >
              Racing Game
            </Link>
            <Link
              href="/games/shooter-game"
              className="px-8 py-4 glass-card rounded-xl text-white font-semibold text-center hover:border-violet-500/30 transition-all"
            >
              Shooter Game
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
