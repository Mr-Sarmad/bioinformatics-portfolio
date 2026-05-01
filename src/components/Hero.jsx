import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { getAssetUrl } from '../utils/assetUrl';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-emerald rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-brand-softBlue rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Area */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Bioinformatics portfolio for <span className="text-brand-teal">computational biology</span>, omics research, and <span className="text-brand-emerald">wet-lab validation</span>.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-brand-slate mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am Sarmad Nawaz, a BS Bioinformatics student at Government College University Faisalabad. My work integrates RNA-seq, single-cell transcriptomics, cancer multi-omics, machine learning, molecular docking, and experimental biology exposure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="bg-brand-teal text-brand-navy px-6 py-3 rounded font-medium hover:bg-brand-emerald transition-colors">
                View Projects
              </a>
              <a href={getAssetUrl("/Sarmad_Nawaz_CV.pdf")} target="_blank" rel="noopener noreferrer" className="border border-brand-teal text-brand-teal px-6 py-3 rounded font-medium hover:bg-brand-teal/10 transition-colors flex items-center gap-2">
                <Download size={18} /> Download CV
              </a>
              <a href="https://github.com/Mr-Sarmad" target="_blank" rel="noopener noreferrer" className="text-brand-lightestSlate hover:text-brand-teal transition-colors p-3">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mr-sarmad" target="_blank" rel="noopener noreferrer" className="text-brand-lightestSlate hover:text-brand-teal transition-colors p-3">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sarmadjutt136@gmail.com" className="text-brand-lightestSlate hover:text-brand-teal transition-colors p-3">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Profile Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-brand-teal rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="glass-card rounded-2xl overflow-hidden relative z-10 w-full h-full p-2 border border-brand-teal/20">
                <img 
                  src={getAssetUrl("/images/profile.jpg")}
                  alt="Sarmad Nawaz" 
                  className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-brand-lightestNavy text-brand-teal text-xs font-bold px-3 py-1 rounded-full border border-brand-teal/30 shadow-lg hidden md:block">R / Bioconductor</div>
                <div className="absolute top-1/4 -left-6 bg-brand-lightestNavy text-brand-emerald text-xs font-bold px-3 py-1 rounded-full border border-brand-emerald/30 shadow-lg hidden md:block">Python</div>
                <div className="absolute top-1/2 -right-8 bg-brand-lightestNavy text-brand-softBlue text-xs font-bold px-3 py-1 rounded-full border border-brand-softBlue/30 shadow-lg hidden md:block">scRNA-seq</div>
                <div className="absolute bottom-1/4 -left-4 bg-brand-lightestNavy text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 shadow-lg hidden md:block">TCGA</div>
                <div className="absolute -bottom-4 right-1/4 bg-brand-lightestNavy text-brand-teal text-xs font-bold px-3 py-1 rounded-full border border-brand-teal/30 shadow-lg hidden md:block">Wet-lab Validation</div>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="flex justify-center gap-4 mt-8 relative z-10">
              <div className="glass-card px-4 py-3 rounded-lg text-center border border-white/5">
                <p className="text-brand-teal font-bold text-xl">Multi-omics</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Analysis</p>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg text-center border border-white/5">
                <p className="text-brand-emerald font-bold text-xl">Dry + Wet</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Lab Skills</p>
              </div>
              <div className="glass-card px-4 py-3 rounded-lg text-center border border-white/5">
                <p className="text-white font-bold text-xl">Research</p>
                <p className="text-xs text-brand-slate uppercase tracking-wider">Portfolio</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
