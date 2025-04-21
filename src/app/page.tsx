'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TabNavigation from './components/TabNavigation';
import Footer from './components/Footer';
import { profileData } from './data/profile';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaServer, FaCloud, FaMobile, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDocker, SiKubernetes } from 'react-icons/si';

// Function to get the appropriate icon for a skill
const getSkillIcon = (skill: string) => {
  switch (skill.toLowerCase()) {
    case 'react':
      return <FaReact className="w-8 h-8" />;
    case 'node.js':
      return <FaNodeJs className="w-8 h-8" />;
    case 'typescript':
      return <SiTypescript className="w-8 h-8" />;
    case 'javascript':
      return <SiJavascript className="w-8 h-8" />;
    case 'python':
      return <FaPython className="w-8 h-8" />;
    case 'java':
      return <FaJava className="w-8 h-8" />;
    case 'databases':
      return <FaDatabase className="w-8 h-8" />;
    case 'backend':
      return <FaServer className="w-8 h-8" />;
    case 'cloud':
      return <FaCloud className="w-8 h-8" />;
    case 'mobile':
      return <FaMobile className="w-8 h-8" />;
    case 'docker':
      return <SiDocker className="w-8 h-8" />;
    case 'kubernetes':
      return <SiKubernetes className="w-8 h-8" />;
    default:
      return <FaReact className="w-8 h-8" />;
  }
};

// Placeholder component for projects that don't have images
const ProjectImagePlaceholder = ({ title }: { title: string }) => {
  // Generate a consistent gradient based on the project title
  const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = hash % 360;
  const hue2 = (hue1 + 40) % 360;
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br" style={{
      background: `linear-gradient(135deg, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 70%, 45%))`
    }}>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default function Home() {
  // Add some placeholder skills if profileData.skills is empty or undefined
  const skills = profileData.skills?.length > 0 ? profileData.skills : 
    ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Databases', 'Backend', 'Cloud', 'Mobile', 'Docker', 'Kubernetes'];

  // Use real projects from profileData
  const projects = profileData.projects.slice(0, 4).map(project => ({
    title: project.title,
    description: project.description,
    tags: project.technologies.slice(0, 4),
    image: project.image || `/images/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    link: project.link
  }));

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const isProjectsInView = useInView(projectsRef, { once: false, amount: 0.2 });
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.2 });
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.2 });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      
      {/* Hero Section with Parallax Effect */}
      <section
        ref={heroRef}
        className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url(/images/spider.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        {/* Content */}
        <div className="container mx-auto px-6 z-30 py-32">
          <div className="text-center">
            <div className="bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg inline-block">
              <h1 
                className="text-5xl md:text-7xl font-bold mb-6 text-black"
              >
                {profileData.name}
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-black max-w-3xl mx-auto mb-8"
              >
                {profileData.title}
              </p>
              
              <p
                className="text-lg text-black max-w-2xl mx-auto mb-12"
              >
                {profileData.about.split('.')[0] + '.'}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300"
              >
                View Projects
          </a>
          <a
                href="#about"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white/70 hover:bg-white/10 transition duration-300"
              >
                About Me
          </a>
        </div>
            
            <div className="flex justify-center mt-16 space-x-6">
        <a
                href={profileData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-all"
              >
                <FaGithub className="w-8 h-8" />
        </a>
        <a
                href={profileData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-all"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <motion.a
                href={profileData.socialLinks.website}
          target="_blank"
          rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#fff" }}
                className="text-blue-300 hover:text-white transition-all"
              >
                <FaGlobe className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Me Section with Parallax */}
      <section 
        id="about" 
        ref={aboutRef}
        className="w-full py-24 bg-white dark:bg-gray-800 overflow-hidden relative"
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url(/images/batman2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            <div className="w-full md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-8 relative"
              >
                <span className="inline-block relative">
                  About Me
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={isAboutInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-0 left-0 h-1 bg-blue-600"
                  />
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg"
              >
                {profileData.about}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4 bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg"
              >
                <div className="flex items-center">
                  <span className="text-blue-600 font-semibold w-20">Email:</span>
                  <a href={`mailto:${profileData.email}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-semibold w-20">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">LAquila, Italy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-semibold w-20">Education:</span>
                  <span className="text-gray-700 dark:text-gray-300">{profileData.education[0].degree}</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/2 relative aspect-square max-w-md"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 to-purple-600 shadow-2xl">
                <div className="absolute w-full h-full bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-2 bg-gray-900/90 rounded-xl overflow-hidden flex items-center justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center"
                  >
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-blue-500/50">
          <Image
                        src="/images/profile.jpg" 
                        alt={profileData.name}
                        fill
                        className="object-cover opacity-100"
                        sizes="128px"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{profileData.name}</h3>
                    <p className="text-blue-300 mb-6">{profileData.title}</p>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        whileHover={{ y: -5, color: "#fff" }}
                        href={profileData.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-white transition-all"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -5, color: "#fff" }}
                        href={profileData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-white transition-all"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Projects Section with Animations */}
      <section 
        id="projects" 
        ref={projectsRef}
        className="w-full py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative"
      >
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url(/images/batman3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-black max-w-3xl mx-auto"
            >
              Explore some of my recent work and creative endeavors
            </motion.p>
          </motion.div>
          <div className="flex justify-center">
            {/* Removed the small Batman image */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isProjectsInView ? 
                  { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 + index * 0.1 } } : 
                  { opacity: 0, y: 50 }
                }
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <ProjectImagePlaceholder title={project.title} />
                  <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={isProjectsInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <h3 className="text-3xl font-bold text-white px-6 py-4 bg-black/30 backdrop-blur-sm rounded-lg">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <div className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View all projects button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View All Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Skills Section with Grid Animation */}
      <section 
        id="skills" 
        ref={skillsRef}
        className="w-full py-24 bg-white dark:bg-gray-800 overflow-hidden relative"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isSkillsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Technologies and tools I specialize in
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
            {skills?.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isSkillsInView ? 
                  { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * index } } : 
                  { opacity: 0, scale: 0.8, y: 20 }
                }
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  {getSkillIcon(skill)}
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-center">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background decorative patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[length:20px_20px]"></div>
    </div>
      </section>

      <Footer profile={profileData} />
    </main>
  );
}
