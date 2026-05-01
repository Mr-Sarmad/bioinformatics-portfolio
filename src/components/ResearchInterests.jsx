import { motion } from 'framer-motion';
import { Dna, Activity, Search, Microscope, BrainCircuit, FlaskConical, TestTube } from 'lucide-react'; // Using similar available icons from lucide-react

const interests = [
  {
    title: "Viral Genomics & Host-Virus Interaction",
    icon: <Dna className="w-8 h-8 text-brand-teal" />
  },
  {
    title: "Cancer Multi-omics & Biomarker Discovery",
    icon: <Activity className="w-8 h-8 text-brand-emerald" />
  },
  {
    title: "Bulk RNA-seq & Single-cell RNA-seq",
    icon: <Search className="w-8 h-8 text-brand-softBlue" />
  },
  {
    title: "Computational Drug Discovery & Docking",
    icon: <TestTube className="w-8 h-8 text-brand-teal" />
  },
  {
    title: "Machine Learning & AI in Healthcare",
    icon: <BrainCircuit className="w-8 h-8 text-brand-emerald" />
  },
  {
    title: "Wet-lab Validation & Cell Culture",
    icon: <FlaskConical className="w-8 h-8 text-white" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ResearchInterests = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-teal text-xl font-mono">03.</span>
          <h2 className="text-3xl font-bold">Research Interests</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="mb-4 p-3 bg-brand-navy rounded-lg inline-block group-hover:bg-brand-lightestNavy transition-colors">
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-lightestSlate group-hover:text-brand-teal transition-colors">
                {interest.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInterests;
