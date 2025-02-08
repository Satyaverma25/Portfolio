import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          SP
        </h1>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Satyaverma25" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/satyaverma25" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:satyaverma.2510@gmail.com" className="text-gray-300 hover:text-white transition">
            <Mail size={20} />
          </a>
          <button className="md:hidden text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}