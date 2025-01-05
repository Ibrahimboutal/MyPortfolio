import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MyPortfolio/Resume.pdf';
    link.download = 'brahim-boutal-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Brahim Boutal
            </h1>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
              Computer Science Student & Aspiring Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate Moroccan student currently pursuing Computer Science in China, 
              with a keen interest in lightweight encryption, federated learning, and IoT solutions. 
              Expected to graduate in July 2025, I'm dedicated to creating innovative solutions 
              that make a difference in the world of technology.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Brahim Boutal"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;