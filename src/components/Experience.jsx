import { motion } from 'framer-motion';
import { experiences, workshops } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-brand-lightestNavy/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand-teal text-xl font-mono">08.</span>
          <h2 className="text-3xl font-bold">Experience & Training</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Experience Timeline */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-px bg-brand-teal"></span> Practical Experience
            </h3>
            <div className="relative border-l border-brand-lightestNavy ml-4 md:ml-6 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-10"
                >
                  <div className="absolute -left-[5px] top-1 w-[11px] h-[11px] rounded-full bg-brand-teal border-[3px] border-brand-navy shadow-[0_0_0_4px_rgba(100,255,218,0.2)]"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <span className="text-brand-teal font-mono text-sm whitespace-nowrap">{exp.date}</span>
                  </div>
                  <h5 className="text-brand-emerald mb-4 font-medium">{exp.location}</h5>
                  
                  <div className="glass-card p-5 rounded-lg border border-white/5">
                    <p className="text-brand-slate text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-px bg-brand-teal"></span> Workshops
            </h3>
            <div className="flex flex-col gap-4">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-lg border-l-2 border-brand-teal hover:bg-brand-lightestNavy transition-colors"
                >
                  <p className="text-sm text-brand-lightestSlate leading-relaxed">{workshop}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
