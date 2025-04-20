'use client';
import { motion } from 'framer-motion';
import { Profile } from '../types/profile';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 animated-border"
              >
                Send Message
              </button>
            </form>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {profile.location}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <a
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <a
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm0-5.057v-3.057c.942-.041 1.851-.129 2.723-.261.274.71.509 1.503.639 2.318h-3.362zm0-5.057v-3.057c1.142.075 2.242.259 3.257.534-.413.92-.719 1.859-.925 2.523h-2.332zm-2 0v-3.057c-1.142.075-2.242.259-3.257.534.413.92.719 1.859.925 2.523h2.332zm0 2v3.057h-3.362c-.13-.815-.365-1.608-.639-2.318.872.132 1.781.22 2.723.261zm0 5.057v3.057c-.864.034-1.715.102-2.538.222-.244-1.039-.397-2.136-.456-3.279h2.994zm-4.707 5.371c-.781-.402-1.518-.88-2.191-1.434.646-.159 1.31-.28 1.978-.364.243.836.532 1.646.891 2.408-.228-.12-.456-.246-.678-.381-.1-.06-.198-.122-.294-.183zm7.12-.819c-.756.519-1.565.948-2.413 1.262.337-.762.626-1.573.869-2.409.67.085 1.335.206 1.98.365-.674.554-1.41 1.031-2.191 1.433l-.245-.651zm4.816-3.238c-.129.627-.299 1.238-.526 1.828l.625-.111-.625.111c-.798.149-1.632.229-2.482.269.139-.886.224-1.794.24-2.716h2.981c-.01.701-.097 1.359-.252 1.999l-.02-.094.059-.286zm-14.816-1.999h2.981c.016.922.101 1.83.24 2.716-.85-.04-1.685-.12-2.482-.269-.227-.59-.397-1.201-.526-1.828-.134-.611-.217-1.268-.232-1.942l.19.323zm10.709-7.115c.837.485 1.595 1.062 2.278 1.714-.627.026-1.258.112-1.887.258-.326-1.031-.778-2.025-1.322-2.951.314.271.62.562.915.874l.016.105zm-6.521-.874c-.544.926-.996 1.92-1.322 2.951-.629-.146-1.26-.232-1.887-.258.683-.652 1.441-1.229 2.278-1.714l.931 1.022zm-2.923 4.216c.816-.123 1.654-.207 2.511-.241.155.995.399 1.951.732 2.831h-3.569c.098-1.049.336-2.051.699-2.985l-.373.395zm9.65-.395c.363.934.601 1.936.699 2.985h-3.57c.334-.88.578-1.836.732-2.831.858.034 1.696.118 2.512.241l-.373-.395zm-8.482-2.169c.226-.591.5-1.152.823-1.679.812.53 1.671.973 2.575 1.316-.555.926-1.028 1.922-1.405 2.965-.772-.114-1.524-.274-2.25-.485.06-.146.124-.292.19-.435.143-.308.295-.607.456-.895l-.389-.787zm7.302 2.591c-.377-1.043-.85-2.039-1.405-2.965.903-.343 1.762-.786 2.575-1.316.324.527.598 1.088.824 1.679.145.377.281.765.389 1.164l.034.058c-.726.211-1.478.37-2.25.485l-.167-.105zm-6.576 6.058c.551-.123 1.113-.22 1.683-.29.407 1.231.982 2.35 1.689 3.322-.807.526-1.654.97-2.536 1.32-.736-1.293-1.266-2.726-1.53-4.212l.694-.14zm5.853 0l-.695.14c-.264 1.486-.793 2.919-1.529 4.212-.882-.351-1.729-.794-2.536-1.32.707-.973 1.283-2.091 1.689-3.322.57.07 1.132.167 1.683.29l.388.0z"/>
                    </svg>
                    <a
                      href={profile.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Website
                    </a>
                  </p>
                  {profile.socialLinks.facebook && (
                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                      <a
                        href={profile.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Facebook
                      </a>
                    </p>
                  )}
                  {profile.socialLinks.instagram && (
                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <a
                        href={profile.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Instagram
                      </a>
                    </p>
                  )}
                  {profile.socialLinks.scholar && (
                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                      </svg>
                      <a
                        href={profile.socialLinks.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Google Scholar
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 