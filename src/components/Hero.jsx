import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { getAssetUrl } from '../utils/assetUrl';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-emerald/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20">

          {/* Profile image — always centered */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center xl:w-auto xl:flex-shrink-0"
          >
            {/* Profile card */}
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal to-brand-emerald p-[3px] blur-sm opacity-70"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-br from-brand-teal to-brand-emerald shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-lightestNavy">
                  <img
                    src={getAssetUrl("/images/profile.jpg")}
                    alt="Sarmad Nawaz — Bioinformatics Researcher"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Name card under photo */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-brand-lightestSlate">Sarmad Nawaz</h2>
              <p className="text-brand-teal font-mono text-sm mt-1">BS Bioinformatics · GCUF</p>
              <p className="text-brand-slate text-xs mt-1">CGPA 3.34 / 4.00</p>
            </div>

            {/* Metric cards */}
            <div className="flex gap-3 mt-5">
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-brand-teal/20">
                <p className="text-brand-teal font-bold text-sm">Multi-omics</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Analysis</p>
              </div>
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-brand-emerald/20">
                <p className="text-brand-emerald font-bold text-sm">Dry + Wet</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Lab</p>
              </div>
              <div className="glass-card px-3 py-2 rounded-lg text-center border border-white/10">
                <p className="text-white font-bold text-sm">Research</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Portfolio</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-brand-teal font-mono text-sm mb-4 tracking-widest uppercase"
            >
              Bioinformatics · Computational Biology · Omics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-brand-lightestSlate"
            >
              Bioinformatics portfolio for{' '}
              <span className="text-brand-teal">computational biology</span>,{' '}
              omics research, and{' '}
              <span className="text-brand-emerald">wet-lab validation</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-brand-slate mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am Sarmad Nawaz, a BS Bioinformatics student at Government College University Faisalabad. My work integrates RNA-seq, single-cell transcriptomics, cancer multi-omics, machine learning, molecular docking, and experimental biology exposure.
            </motion.p>

            {/* Skill badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {["R / Bioconductor", "Python", "RNA-seq", "scRNA-seq", "TCGA", "Molecular Docking", "Wet-lab Validation"].map((badge) => (
                <span key={badge} className="text-xs font-mono bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="bg-brand-teal text-brand-navy px-6 py-3 rounded font-semibold hover:bg-brand-emerald transition-colors">
                View Projects
              </a>
              <a
                href={getAssetUrl("/Sarmad_Nawaz_CV.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-teal text-brand-teal px-6 py-3 rounded font-semibold hover:bg-brand-teal/10 transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </a>
              <a href="https://github.com/Mr-Sarmad" target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors p-3" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mr-sarmad" target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors p-3" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sarmadjutt136@gmail.com" className="text-brand-slate hover:text-brand-teal transition-colors p-3" aria-label="Email">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
