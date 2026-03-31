'use client';

import Link from 'next/link';
import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { profileData } from '../data/profile';
import { useHasMounted } from '../hooks/useHasMounted';
import { usePreferLightMotion } from '../hooks/usePreferLightMotion';
import { FaGithub, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export default function Footer() {
  const mounted = useHasMounted();
  const lightMotion = usePreferLightMotion();
  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: lightMotion ? 12 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: lightMotion ? 0.2 : 0.5 }
      }
    }),
    [lightMotion]
  );
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.1 });
  const showFooter = mounted && (lightMotion || footerInView);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={showFooter ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: lightMotion ? 0 : 0.1 } }
      }}
      className="w-full bg-[#060a14] text-white py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Abid Hossain</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {profileData.about.substring(0, 180)}...
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Home</Link>
              <Link href="/projects" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Projects</Link>
              <Link href="/publications" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Publications</Link>
              <Link href="/contact" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Contact</Link>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Location</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 shrink-0" />
                {profileData.location}
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { href: profileData.socialLinks.github, icon: <FaGithub className="w-4 h-4" /> },
                { href: profileData.socialLinks.linkedin, icon: <FaLinkedin className="w-4 h-4" /> },
                { href: profileData.socialLinks.website, icon: <FaGlobe className="w-4 h-4" /> },
                ...(profileData.socialLinks.scholar ? [{ href: profileData.socialLinks.scholar, icon: <SiGooglescholar className="w-4 h-4" /> }] : []),
                ...(profileData.socialLinks.facebook ? [{ href: profileData.socialLinks.facebook, icon: <FaFacebook className="w-4 h-4" /> }] : []),
                ...(profileData.socialLinks.instagram ? [{ href: profileData.socialLinks.instagram, icon: <FaInstagram className="w-4 h-4" /> }] : []),
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-slate-800/50 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Abid Hossain. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
