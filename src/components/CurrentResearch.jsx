import { motion } from 'framer-motion';
import { FlaskConical, Dna, Activity } from 'lucide-react';

const currentResearch = [
  {
    title: "TCGA-COAD Age-Stratified Multi-omics Biomarker Discovery",
    status: "In progress — manuscript preparation",
    statusColor: "text-brand-teal",
    description: "Integrating RNA-seq and DNA methylation data across age-stratified TCGA-COAD cohorts to identify robust biomarkers and age-specific oncogenic pathway alterations.",
    icon: <Activity className="w-6 h-6 text-brand-teal" />
  },
  {
    title: "AKT Protein–AKT8 Docking for Antiviral Host-Signaling Inhibition",
    status: "In progress — validation planning",
    statusColor: "text-brand-emerald",
    description: "Molecular docking study exploring host-signaling inhibition via AKT–AKT8 interaction as a potential antiviral strategy, with downstream wet-lab validation planned.",
    icon: <FlaskConical className="w-6 h-6 text-brand-emerald" />
  },
  {
    title: "FMDV Molecular Characterization and Host-Response Analysis",
    status: "Ongoing research training",
    statusColor: "text-brand-softBlue",
    description: "Research training at NIBGE encompassing FMDV sample handling, viral RNA isolation, cDNA synthesis, PCR, and downstream transcriptomic analysis of host-response biology.",
    icon: <Dna className="w-6 h-6 text-brand-softBlue" />
  }
];

const CurrentResearch = () => {
  return (
    <section id="current-research" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-teal text-xl font-mono">02.</span>
          <h2 className="text-3xl font-bold">Current Research</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentResearch.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl border border-white/5 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-navy rounded-lg">{item.icon}</div>
                <h3 className="text-base font-bold text-brand-lightestSlate leading-snug">{item.title}</h3>
              </div>
              <span className={`text-xs font-mono uppercase tracking-widest ${item.statusColor} flex items-center gap-2`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse inline-block"></span>
                {item.status}
              </span>
              <p className="text-sm text-brand-slate leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentResearch;
