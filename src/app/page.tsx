'use client';

import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useHasMounted } from './hooks/useHasMounted';
import { usePreferLightMotion } from './hooks/usePreferLightMotion';
import TabNavigation from './components/TabNavigation';
import Footer from './components/Footer';
import { profileData } from './data/profile';
import {
  FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt,
  FaGraduationCap, FaAward, FaCertificate, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

/** Math / CS research aesthetic — Unsplash (Dan Cristian Pădureț) */
const MATH_BOARD_BG = '/images/hero-tech-2.jpg';

function MathBoardBackdrop({ variant }: { variant: 'hero' | 'light' | 'dark' }) {
  if (variant === 'hero') {
    return (
      <>
        {/* Photo skipped on mobile — smaller decode + less overdraw */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${MATH_BOARD_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/92 via-[#0a0f1a]/82 to-[#0a0f1a]/92" />
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
      </>
    );
  }
  const tint = variant === 'dark' ? 'bg-[#0d1321]/93' : 'bg-[#0a0f1a]/93';
  return (
    <>
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center opacity-[0.2]"
        style={{ backgroundImage: `url(${MATH_BOARD_BG})` }}
      />
      <div className={`absolute inset-0 ${tint}`} />
    </>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="section-divider mt-6 mx-auto max-w-xs" />
    </div>
  );
}

export default function Home() {
  const mounted = useHasMounted();
  const lightMotion = usePreferLightMotion();
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const pubRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);
  const awardsRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const isExpInView = useInView(expRef, { once: true, amount: 0.15 });
  const isEduInView = useInView(eduRef, { once: true, amount: 0.2 });
  const isPubInView = useInView(pubRef, { once: true, amount: 0.2 });
  const isProjInView = useInView(projRef, { once: true, amount: 0.1 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const isAwardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  /* Narrow / reduced-motion: reveal all at once after mount — avoids many scroll observers + repaints */
  const showAbout = mounted && (lightMotion || isAboutInView);
  const showExp = mounted && (lightMotion || isExpInView);
  const showEdu = mounted && (lightMotion || isEduInView);
  const showPub = mounted && (lightMotion || isPubInView);
  const showProj = mounted && (lightMotion || isProjInView);
  const showSkills = mounted && (lightMotion || isSkillsInView);
  const showAwards = mounted && (lightMotion || isAwardsInView);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: lightMotion ? 12 : 30 },
      visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: lightMotion ? 0.2 : 0.5,
          delay: lightMotion ? 0 : i * 0.1
        }
      })
    }),
    [lightMotion]
  );

  const staggerVariants = useMemo(
    () => ({
      visible: { transition: { staggerChildren: lightMotion ? 0 : 0.08 } }
    }),
    [lightMotion]
  );

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#0a0f1a]">
      <TabNavigation />

      {/* ─── HERO ─── */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <MathBoardBackdrop variant="hero" />
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {profileData.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gradient font-semibold mb-6"
            >
              {profileData.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Synthetic data generation &bull; Foundation models &bull; Multimodal deep learning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href={profileData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-3.5 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/5 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center gap-5"
            >
              {[
                { href: profileData.socialLinks.github, icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
                { href: profileData.socialLinks.linkedin, icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn" },
                { href: profileData.socialLinks.scholar!, icon: <SiGooglescholar className="w-5 h-5" />, label: "Scholar" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" ref={aboutRef} className="w-full py-24 relative overflow-hidden">
        <MathBoardBackdrop variant="light" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showAbout ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="About Me" />
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 md:p-10">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {profileData.about}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <FaMapMarkerAlt className="text-cyan-400 shrink-0" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FaGraduationCap className="text-cyan-400 shrink-0" />
                  <span className="truncate">{profileData.education[0].institution}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" ref={expRef} className="w-full py-24 relative overflow-hidden bg-[#0d1321]">
        <MathBoardBackdrop variant="dark" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showExp ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Experience" subtitle="Professional and academic roles" />
            <div className="relative pl-10">
              <div className="timeline-line" />
              {profileData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="absolute left-[-2.05rem] top-1.5 timeline-dot" />
                  <div className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                      <span className="text-sm text-cyan-400 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">
                      {exp.company} &bull; {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="text-slate-300 text-sm leading-relaxed flex gap-2">
                          <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" ref={eduRef} className="w-full py-24 relative overflow-hidden">
        <MathBoardBackdrop variant="light" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showEdu ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Education" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card rounded-xl p-6 hover:border-cyan-500/20 transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <FaGraduationCap className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-snug">{edu.degree}</h3>
                      <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-400">
                      <span>{edu.location}</span>
                      <span className="text-cyan-400 font-mono">{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <p className="text-slate-300">
                        <span className="text-slate-500">GPA:</span> {edu.grade}
                      </p>
                    )}
                    {edu.thesis && (
                      <p className="text-slate-300">
                        <span className="text-slate-500">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.coursework.map((c, j) => (
                          <span key={j} className="px-2 py-0.5 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PUBLICATIONS ─── */}
      <section id="publications" ref={pubRef} className="w-full py-24 relative overflow-hidden bg-[#0d1321]">
        <MathBoardBackdrop variant="dark" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showPub ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Publications & Research" subtitle="Peer-reviewed papers and ongoing work" />

            <div className="space-y-5 mb-10">
              {profileData.publications.map((pub, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
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
                        className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {profileData.preprints.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-300 mb-4">Preprints / Under Review</h3>
                {profileData.preprints.map((pre, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="glass-card rounded-xl p-6 border-dashed hover:border-violet-500/20 transition-colors"
                  >
                    <h4 className="text-white font-bold mb-2">{pre.title}</h4>
                    <p className="text-slate-400 text-sm mb-2">
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
            )}

            {profileData.socialLinks.scholar && (
              <motion.div variants={fadeUp} className="mt-8 text-center">
                <a
                  href={profileData.socialLinks.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <SiGooglescholar className="w-4 h-4" />
                  View full profile on Google Scholar
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" ref={projRef} className="w-full py-24 relative overflow-hidden">
        <MathBoardBackdrop variant="light" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showProj ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Projects" subtitle="Research and engineering work" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
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
            <motion.div variants={fadeUp} className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" ref={skillsRef} className="w-full py-24 relative overflow-hidden bg-[#0d1321]">
        <MathBoardBackdrop variant="dark" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showSkills ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Skills & Tools" subtitle="Technologies I work with" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="glass-card rounded-xl p-6"
                >
                  <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, j) => (
                      <span
                        key={j}
                        className="skill-tag px-3 py-1.5 text-sm rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-cyan-500/30 hover:text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── AWARDS & CERTIFICATIONS ─── */}
      <section id="awards" ref={awardsRef} className="w-full py-24 relative overflow-hidden">
        <MathBoardBackdrop variant="light" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            animate={showAwards ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <SectionHeading title="Awards & Certifications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Awards */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
                  <FaAward className="text-amber-400" />
                  Awards & Scholarships
                </h3>
                <div className="space-y-4">
                  {profileData.awards.map((award, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i}
                      className="glass-card rounded-lg p-4 hover:border-amber-500/20 transition-colors"
                    >
                      <h4 className="text-white font-medium text-sm">{award.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-slate-500 text-xs">{award.issuer}</span>
                        <span className="text-amber-400/70 text-xs font-mono">{award.date}</span>
                      </div>
                      {award.description && (
                        <p className="text-slate-400 text-xs mt-1">{award.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
                  <FaCertificate className="text-emerald-400" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {profileData.certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i}
                      className="glass-card rounded-lg p-4 hover:border-emerald-500/20 transition-colors"
                    >
                      <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-slate-500 text-xs">{cert.issuer}</span>
                        <span className="text-emerald-400/70 text-xs font-mono">{cert.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
