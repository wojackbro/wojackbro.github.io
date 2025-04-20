'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { profileData } from '../../data/profile';

// Placeholder component for projects that don't have images
const ProjectImagePlaceholder = ({ title }: { title: string }) => {
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

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;

  // Find the project data based on the projectId (you might need a better way to map this, e.g., using a slug)
  const project = profileData.projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <TabNavigation />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-2xl text-red-500">Project not found!</p>
        </div>
        <Footer profile={profileData} />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      
      {/* Project Header */}
      <section className="w-full pt-40 pb-20 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-blue-200 mb-6">{project.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-blue-300">{project.period}</span>
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              {/* Placeholder for more detailed project content */}
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p>{project.description}</p>
                {/* Add more details here, like challenges, solutions, results */}
                <p>More details about the {project.title} project will be added here soon. This section can include information about the project goals, challenges faced, solutions implemented, key features, and outcomes.</p>
                
                <h4>Key Technologies Used:</h4>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                
                <p>Visit the project link for more information:</p>
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {project.link}
                </Link>
              </div>
            </motion.div>
            
            {/* Sidebar with Image and Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  {/* Always use placeholder */} 
                  <ProjectImagePlaceholder title={project.title} />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer profile={profileData} />
    </main>
  );
} 