import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import ThemeToggle from './common/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Research', href: 'research' },
    { name: 'Experience', href: 'experience' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-20 py-4">
        <div className="flex items-center justify-between">
          <a href="#about" className="text-2xl font-bold text-blue-600">BB</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}  // Use 'to' from react-scroll for smooth scrolling
                smooth={true}    // Enable smooth scrolling
                offset={-70}     // Optional: Adjust the scroll position (header height)
                duration={500}   // Optional: Scroll duration in ms
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" // Add cursor-pointer class
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://github.com/Ibrahimboutal" aria-label="GitHub" className="text-gray-600 hover:text-blue-600">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/brahim-boutal/" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ibrahim.boutal@gmail.com" aria-label="Email" className="text-gray-600 hover:text-blue-600">
              <Mail size={20} />
            </a>
            <div id="theme-toggle-wrapper" className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 mobile-menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}  // Use 'to' from react-scroll for smooth scrolling
                smooth={true}    // Enable smooth scrolling
                offset={-70}     // Optional: Adjust the scroll position (header height)
                duration={500}   // Optional: Scroll duration in ms
                className="block py-2 text-gray-600 hover:text-blue-600 cursor-pointer" // Add cursor-pointer class
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
            <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
