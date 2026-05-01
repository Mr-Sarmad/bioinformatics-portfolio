import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUrl';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-brand-teal tracking-tighter">
          SN.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-lightestSlate hover:text-brand-teal text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={getAssetUrl("/Sarmad_Nawaz_CV.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-teal text-brand-teal px-4 py-1 rounded hover:bg-brand-teal/10 transition-colors text-sm font-medium ml-4"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-teal focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-lightestNavy shadow-xl border-t border-brand-navy"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-brand-lightestSlate hover:text-brand-teal text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={getAssetUrl("/Sarmad_Nawaz_CV.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-brand-teal text-brand-teal px-6 py-2 rounded hover:bg-brand-teal/10 transition-colors text-lg font-medium"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
