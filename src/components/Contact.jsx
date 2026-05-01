import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-lightestNavy to-brand-navy opacity-90 z-0"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <span className="text-brand-teal text-xl font-mono mb-4 block">08. What's Next?</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Open to research collaboration and academic opportunities.
              </h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto mb-10">
                Available for opportunities in bioinformatics, computational biology, transcriptomics, multi-omics, viral genomics, molecular docking, and wet-lab supported research.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:sarmadjutt136@gmail.com" 
                  className="bg-brand-teal text-brand-navy px-8 py-4 rounded font-bold hover:bg-brand-emerald transition-colors flex items-center gap-2"
                >
                  <Mail size={20} /> Say Hello
                </a>
                <a 
                  href="https://github.com/Mr-Sarmad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-lightestNavy text-brand-teal px-8 py-4 rounded font-bold hover:bg-brand-lightestNavy/80 border border-brand-teal/30 transition-colors flex items-center gap-2"
                >
                  <Github size={20} /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mr-sarmad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-lightestNavy text-brand-teal px-8 py-4 rounded font-bold hover:bg-brand-lightestNavy/80 border border-brand-teal/30 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a 
                  href="/bioinformatics-portfolio/Sarmad_Nawaz_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-lightestNavy text-brand-emerald px-8 py-4 rounded font-bold hover:bg-brand-lightestNavy/80 border border-brand-emerald/30 transition-colors flex items-center gap-2"
                >
                  <Download size={20} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
