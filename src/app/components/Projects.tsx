'use client';
import { motion } from 'framer-motion';
import { Profile } from '../types/profile';

interface ProjectsProps {
  profile: Profile;
}

export default function Projects({ profile }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-white/30 dark:bg-gray-900/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white neon-text">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            A selection of my recent work and personal projects that showcase my skills and expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="h-48 project-image-container relative">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ 
                      backgroundImage: `url('/images/projects/placeholder${(index % 6) + 1}.jpg')`,
                      backgroundSize: 'cover'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-[1]"></div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs font-medium text-white z-10">
                    {project.technologies[0]}
                  </div>
                  <div className="absolute left-0 top-0 bg-gradient-to-br from-blue-500 to-purple-600 w-1 h-full"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100/80 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors group"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 