import React, { useRef, useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('vXQew59xwKncOKoxl');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      const result = await emailjs.sendForm(
        'service_h5iivbc',
        'template_m7jqqaq',
        formRef.current,
        'vXQew59xwKncOKoxl'
      );

      console.log('Success:', result);
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Get in <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">satyaverma.2510@gmail.com</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">+91 8757973751</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-gray-400">Lovely Professional University, Punjab</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}