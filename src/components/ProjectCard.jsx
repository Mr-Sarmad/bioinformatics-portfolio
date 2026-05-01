import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col group h-full">
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-bold text-brand-lightestSlate group-hover:text-brand-teal transition-colors mb-3">
          {project.title}
        </h3>
        
        <div className="bg-brand-lightestNavy/80 p-4 rounded-lg mb-4 shadow-lg border border-white/5">
          <p className="text-sm text-brand-slate leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.map((tag, idx) => (
            <li key={idx} className="text-xs font-mono text-brand-emerald bg-brand-emerald/10 px-2 py-1 rounded">
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-brand-lightestNavy">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors">
              <Github size={20} />
            </a>
          )}
          <a href="#gallery" className="text-brand-teal text-sm font-medium hover:underline flex items-center gap-1">
            View Figures <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
