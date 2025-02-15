import React from 'react';
import { BookOpen, Code, Coffee, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    period: "2022 - Present",
    description: "Currently pursuing B.Tech with a focus on computer science and software development.",
  },
  {
    title: "Higher Secondary Education",
    institution: "Kendriya Vidyalaya Chakradharpur",
    period: "2019 - 2021",
    description: "Completed 12th grade with focus on Physics, Chemistry, and Mathematics.",
  },
  {
    title: "Secondary Education",
    institution: "Kendriya Vidyalaya Chakradharpur",
    period: "2014 - 2019",
    description: "Completed secondary education with distinction.",
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

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -5 }}
          >
            <BookOpen className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <p className="text-gray-400">Currently pursuing B.Tech in Computer Science at LPU, maintaining a strong academic record.</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -5 }}
          >
            <Code className="text-purple-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Coding</h3>
            <p className="text-gray-400">Passionate about writing clean, efficient code and building innovative solutions.</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ y: -5 }}
          >
            <Coffee className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Learning</h3>
            <p className="text-gray-400">Constantly learning new technologies and staying updated with industry trends.</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            Education <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Timeline</span>
          </h3>
          
          <motion.div 
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-32"
                variants={item}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500 md:left-16"></div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500 md:left-[60px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
                
                {/* Date */}
                <div className="absolute left-8 top-0 text-sm text-gray-400 md:left-0 md:text-right md:pr-8">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>
                
                {/* Content */}
                <motion.div
                  className="bg-gray-800 p-6 rounded-lg"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-blue-500" size={24} />
                    <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                  </div>
                  <p className="text-purple-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.description}</p>
                  <p className="text-sm text-blue-400">{edu.grade}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
