import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ figure, onClose, onNext, onPrev }) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!figure) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/95 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-brand-slate hover:text-white transition-colors p-2 z-[110]"
        >
          <X size={32} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-brand-slate hover:text-white transition-colors p-2 z-[110]"
        >
          <ChevronLeft size={48} />
        </button>

        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full flex flex-col items-center max-h-full"
        >
          <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden rounded-xl bg-black/50 border border-white/10 shadow-2xl">
            <img 
              src={figure.image} 
              alt={figure.title} 
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
          <div className="bg-brand-lightestNavy/80 w-full mt-4 p-6 rounded-xl border border-white/5 text-center">
            <h4 className="text-xl font-bold text-white mb-2">{figure.title}</h4>
            <p className="text-brand-slate text-sm md:text-base">{figure.caption}</p>
          </div>
        </motion.div>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-brand-slate hover:text-white transition-colors p-2 z-[110]"
        >
          <ChevronRight size={48} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
