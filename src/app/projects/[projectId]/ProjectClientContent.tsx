'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Project } from '../../types/profile';
import { usePreferLightMotion } from '../../hooks/usePreferLightMotion';

interface ProjectClientContentProps {
  project: Project;
}

export default function ProjectClientContent({ project }: ProjectClientContentProps) {
  const lightMotion = usePreferLightMotion();
  const t = lightMotion ? { duration: 0.25 } : { duration: 0.6 };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0f1a]">
      <TabNavigation />

      {/* Header */}
      <section className="w-full pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/90" />
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="absolute top-0 right-1/4 w-[min(100%,400px)] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm mb-8 transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" />
            All Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-slate-400 text-lg mb-6">{project.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-cyan-400 text-sm font-mono">{project.period}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 text-sm rounded-lg hover:bg-cyan-500/20 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...t, delay: lightMotion ? 0.05 : 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="skill-tag px-3 py-1.5 text-sm rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
