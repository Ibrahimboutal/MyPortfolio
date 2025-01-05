import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import SectionHeader from './common/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Section Header */}
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Let's connect and discuss opportunities" 
        />

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Contact */}
          <a
            href="mailto:ibrahim.boutal@gmail.com"
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg 
                       shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail className="text-blue-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              ibrahim.boutal@gmail.com
            </p>
          </a>

          {/* GitHub Contact */}
          <a
            href="https://github.com/Ibrahimboutal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg 
                       shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github className="text-blue-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              View My Projects
            </p>
          </a>

          {/* LinkedIn Contact */}
          <a
            href="https://www.linkedin.com/in/brahim-boutal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg 
                       shadow-lg hover:shadow-xl transition-shadow"
          >
            <Linkedin className="text-blue-600 mb-4" size={32} />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Connect with Me
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
