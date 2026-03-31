'use client';

import { motion } from 'framer-motion';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { profileData } from '../../data/profile';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className="w-6 h-6" />,
  instagram: <FaInstagram className="w-6 h-6" />,
  linkedin: <FaLinkedin className="w-6 h-6" />,
  github: <FaGithub className="w-6 h-6" />,
  website: <FaGlobe className="w-6 h-6" />,
  scholar: <SiGooglescholar className="w-6 h-6" />
};

export default function SocialMediaPage() {
  const links = Object.entries(profileData.socialLinks)
    .filter(([, value]) => Boolean(value));

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
            Connect With Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Find me on social media and professional networks
          </motion.p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map(([key, value], i) => (
              <motion.a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:border-cyan-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {socialIcons[key] || <FaGlobe className="w-6 h-6" />}
                </div>
                <h3 className="text-white font-semibold capitalize mb-1">{key}</h3>
                <p className="text-slate-500 text-xs break-all">
                  {value.replace(/^https?:\/\//, '')}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
