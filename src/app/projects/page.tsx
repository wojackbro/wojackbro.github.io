'use client';

import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0f1a]">
      <TabNavigation />

      {/* Header */}
      <section className="w-full pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 dot-pattern" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Research work, engineering projects, and creative experiments
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.projects.map((project, i) => {
              const hash = project.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
              const hue1 = hash % 360;
              const hue2 = (hue1 + 50) % 360;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={fadeUp}
                  className="glass-card rounded-xl overflow-hidden hover:border-cyan-500/20 transition-all group"
                >
                  <div
                    className="h-36 flex items-center justify-center relative"
                    style={{ background: `linear-gradient(135deg, hsl(${hue1}, 50%, 25%), hsl(${hue2}, 50%, 18%))` }}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <span className="text-xs font-mono text-white/60 absolute top-3 right-3">{project.period}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((t, j) => (
                        <span key={j} className="px-2 py-0.5 text-xs rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
