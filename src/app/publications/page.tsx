'use client';

import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

export default function PublicationsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0f1a]">
      <TabNavigation />

      {/* Header */}
      <section className="w-full pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 dot-pattern" />
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Peer-reviewed papers, preprints, and ongoing research
          </motion.p>
        </div>
      </section>

      {/* Published Papers */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-xl font-semibold text-white mb-8">Published Papers</h2>
          <div className="space-y-5">
            {profileData.publications.map((pub, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                custom={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">{pub.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">
                      {pub.authors.map((a, j) => (
                        <span key={j}>
                          {a.includes('Hossain') ? (
                            <strong className="text-cyan-400">{a}</strong>
                          ) : a}
                          {j < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {pub.venue}
                      </span>
                      <span className="text-slate-500 text-sm">{pub.date}</span>
                    </div>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-lg hover:bg-blue-500/20 transition-colors"
                    >
                      Read Paper
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preprints */}
      {profileData.preprints.length > 0 && (
        <section className="w-full py-16 bg-[#0d1321]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-xl font-semibold text-white mb-8">Preprints / Under Review</h2>
            <div className="space-y-5">
              {profileData.preprints.map((pre, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={fadeUp}
                  className="glass-card rounded-xl p-6 border-dashed hover:border-violet-500/20 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">{pre.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {pre.authors.map((a, j) => (
                      <span key={j}>
                        {a.includes('Hossain') ? (
                          <strong className="text-cyan-400">{a}</strong>
                        ) : a}
                        {j < pre.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <span className="px-2.5 py-0.5 text-xs rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {pre.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scholar CTA */}
      {profileData.socialLinks.scholar && (
        <section className="w-full py-16">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-slate-400 mb-6">
              For citation metrics and a complete list of publications, visit my Google Scholar profile.
            </p>
            <a
              href={profileData.socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
            >
              <SiGooglescholar className="w-4 h-4" />
              Google Scholar Profile
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
