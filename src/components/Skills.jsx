import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const SkillGroup = ({ title, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card p-8 rounded-xl h-full border-t-4 border-brand-teal"
  >
    <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((skill, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-brand-slate">
          <span className="text-brand-teal text-lg leading-none">▹</span> {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-teal text-xl font-mono">06.</span>
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <div className="h-px bg-brand-lightestNavy flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SkillGroup title="Dry Lab & Programming" items={skills.dryLab} index={0} />
          <SkillGroup title="Bioinformatics & Omics" items={skills.bioinformatics} index={1} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SkillGroup title="Tools & Databases" items={skills.tools} index={2} />
          <SkillGroup title="Wet Lab Validation" items={skills.wetLab} index={3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
