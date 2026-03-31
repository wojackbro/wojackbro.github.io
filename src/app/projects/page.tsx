'use client';

import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useMemo } from 'react';
import { usePreferLightMotion } from '../hooks/usePreferLightMotion';

export default function ProjectsPage() {
  const lightMotion = usePreferLightMotion();

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: lightMotion ? 12 : 20 },
      visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: lightMotion ? 0.2 : 0.5,
          delay: lightMotion ? 0 : i * 0.08
        }
      })
    }),
    [lightMotion]
  );

  const headerTransition = lightMotion ? { duration: 0.25 } : { duration: 0.6 };

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
            transition={headerTransition}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...headerTransition, delay: lightMotion ? 0.05 : 0.1 }}
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
            {profileData.projects.map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400/80 shrink-0">{project.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((t, j) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
