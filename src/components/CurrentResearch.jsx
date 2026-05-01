import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

const CurrentResearch = () => {
  return (
    <section id="current-research" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-teal text-xl font-mono">02.</span>
          <h2 className="text-3xl font-bold">Current Research</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 rounded-2xl border border-brand-teal/20 relative overflow-hidden max-w-4xl"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-teal to-brand-emerald rounded-l-2xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-bl-full"></div>

          <div className="flex flex-col md:flex-row gap-6 items-start pl-4">
            <div className="p-3 bg-brand-navy rounded-xl flex-shrink-0">
              <Dna className="w-8 h-8 text-brand-teal" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-teal">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse inline-block"></span>
                  Ongoing Research
                </span>
                <span className="text-xs bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-3 py-0.5 rounded-full font-mono">
                  Viral Genomics · Phytochemicals · Host-Virus Interaction
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-brand-lightestSlate leading-snug mb-4">
                Meta-Transcriptomics-Guided Discovery of Host Dependency Factors and Phytochemical Antivirals Against Acute and Persistent Foot-and-Mouth Disease Virus Infection
              </h3>

              <p className="text-brand-slate leading-relaxed text-sm md:text-base">
                Research training at the Drug Discovery and Structural Biology Lab, NIBGE, Faisalabad. Work includes FMDV sample handling, viral RNA isolation, cDNA synthesis, PCR and RT-PCR, DNA extraction, mammalian cell culture, toxicity assay setup, and BSL-2 laboratory workflows. The project aims to integrate transcriptomic and computational approaches to identify host dependency factors and evaluate phytochemical candidates as antivirals against FMDV.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentResearch;
