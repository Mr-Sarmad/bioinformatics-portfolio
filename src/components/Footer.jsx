import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy py-8 border-t border-brand-lightestNavy relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-slate text-sm font-mono text-center md:text-left">
          Designed & Built by Sarmad Nawaz &copy; {new Date().getFullYear()}
        </p>
        
        <button 
          onClick={scrollToTop}
          className="p-3 bg-brand-lightestNavy text-brand-teal rounded-full hover:bg-brand-teal hover:text-brand-navy transition-colors shadow-lg group relative"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
