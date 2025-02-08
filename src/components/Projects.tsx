import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 3',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500',
    github: '#',
    live: '#',
    date: 'September 2024',
    duration: '5 months'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A command-line Tic-Tac-Toe game implemented in Java using Data Structures and Algorithms (DSA) concepts. Features include a minimax algorithm for AI, two-player mode, and an optimized game state evaluation.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500',
    github: '#',
    live: '#',
    date: 'June 2024',
    duration: '1 months'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built using HTML, CSS, and JavaScript to showcase my skills, projects, and contact details.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=500',
    github: '#',
    live: 'https://satyaportfolio25.netlify.app',
    date: 'May 2023 - July 2023',
    duration: '2.5 months'
  },
  {
    title: 'Blood Donation Website',
    description: 'A web platform built using HTML, CSS, and JavaScript to connect blood donors with recipients. Features include donor registration, blood request forms, and awareness resources.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=500',
    github: '#',
    live: '#',
    date: 'September 2022 - November 2022',
    duration: '3 months'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Central timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
            
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}
                variants={item}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-10px',
                    transform: 'translateX(50%)'
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
                
                {/* Date badge */}
                <div className="absolute top-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-4 py-1 text-sm text-white"
                     style={{ 
                       [index % 2 === 0 ? 'right' : 'left']: '0',
                     }}>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div
                  className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}