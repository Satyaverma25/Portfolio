import React from 'react';
import { Code2, GitBranch, Brain, Coffee, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Data Structures & Algorithms',
    icon: <Brain className="text-blue-500" size={24} />,
    items: [
      'Array & String Manipulation',
      'Trees & Graphs',
      'Dynamic Programming',
      'Sorting & Searching',
      'Problem Solving'
    ]
  },
  {
    category: 'Object Oriented Programming',
    icon: <Code2 className="text-purple-500" size={24} />,
    items: [
      'Inheritance & Polymorphism',
      'Encapsulation',
      'Design Patterns',
      'SOLID Principles',
      'Clean Code'
    ]
  },
  {
    category: 'Version Control System',
    icon: <GitBranch className="text-blue-500" size={24} />,
    items: [
      'Git Workflow',
      'Branch Management',
      'Code Review',
      'Collaboration',
      'CI/CD Integration'
    ]
  },
  {
    category: 'Python',
    icon: <FileCode className="text-blue-500" size={24} />,
    items: [
      'Basic Syntax & Data Types',
      'Functions & Modules',
      'File Handling',
      'Lists & Dictionaries',
      'Exception Handling'
    ]
  },
  {
    category: 'Java',
    icon: <Coffee className="text-purple-500" size={24} />,
    items: [
      'Object-Oriented Programming',
      'Multithreading',
      'Collections Framework',
      'Exception Handling',
      'File I/O Operations'
    ]
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, index) => (
                  <motion.li
                    key={item}
                    className="text-gray-400 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}