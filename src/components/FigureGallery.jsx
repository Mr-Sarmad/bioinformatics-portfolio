import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { figures } from '../data/figures';
import Lightbox from './Lightbox';

const categories = ["All", "TCGA-COAD", "Single-cell", "Docking", "Wet-lab", "NeuroScan-AI", "Leishmaniasis"];

const FigureGallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredFigures = filter === "All" ? figures : figures.filter(f => f.project === filter);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredFigures.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredFigures.length) % filteredFigures.length);
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-teal text-xl font-mono">05.</span>
          <h2 className="text-3xl font-bold">Scientific Figure Gallery</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                ? 'bg-brand-teal text-brand-navy' 
                : 'bg-brand-lightestNavy text-brand-slate hover:text-brand-teal border border-brand-navy hover:border-brand-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredFigures.map((figure, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={figure.id}
                className="cursor-pointer group relative overflow-hidden rounded-xl bg-brand-navy border border-white/5 aspect-square"
                onClick={() => openLightbox(index)}
              >
                <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={figure.image} 
                  alt={figure.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h4 className="text-sm font-bold text-white truncate">{figure.title}</h4>
                  <p className="text-xs text-brand-teal">{figure.project}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <Lightbox 
            figure={filteredFigures[selectedIndex]} 
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </div>
    </section>
  );
};

export default FigureGallery;
