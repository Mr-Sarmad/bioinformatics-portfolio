import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-lightestNavy/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-4">
            <span className="text-brand-teal text-xl font-mono">01.</span> About Me
            <div className="h-px bg-brand-lightestNavy w-32 ml-4"></div>
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-emerald/5 rounded-tr-full"></div>
            
            <p className="text-lg md:text-xl text-brand-slate leading-relaxed relative z-10 text-justify md:text-center">
              Sarmad Nawaz is an aspiring bioinformatician focused on computational biology, viral genomics, transcriptomics, cancer multi-omics, machine learning, and computational drug discovery. His work combines reproducible dry-lab pipelines with wet-lab exposure, aiming to connect computational predictions with experimental validation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
