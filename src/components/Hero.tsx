import React from 'react';
import { ArrowRight, Code2, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-6 flex gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Code2 className="text-blue-500" size={32} />
            <Terminal className="text-purple-500" size={32} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Hi, I'm{' '}
              <span className="inline-block animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent bg-300% font-black">
                Satya Prakash
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400">Aspiring Software Developer</h2>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m Satya Prakash, a B.Tech Computer Science Engineering student at Lovely Professional University, Punjab. 
               I have a strong interest in problem-solving, constantly improving my skills in algorithms and data structures. I enjoy tackling complex challenges and optimizing solutions for efficiency.
              I’m always eager to learn new technologies and expand my knowledge in software development. Let’s connect and collaborate on exciting projects!
            </p>
          </motion.div>

          <motion.div
            className="flex gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/Satyaverma25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="text-white" size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/satyaverma25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="text-white" size={24} />
            </motion.a>
            <motion.a
              href="mailto:satyaverma.2510@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="text-white" size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </motion.a>
            <motion.a
              href="#projects"
              className="group flex items-center gap-2 border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}