import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { repositories } from '../data/repositories';

const GitHubRepos = () => {
  return (
    <section className="py-20 bg-brand-lightestNavy/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-brand-lightestNavy w-16 md:w-32"></div>
          <span className="text-brand-teal text-xl font-mono">05.</span>
          <h2 className="text-3xl font-bold">GitHub Repositories</h2>
          <div className="h-px bg-brand-lightestNavy w-16 md:w-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <motion.a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-4 text-brand-teal">
                <FolderGit2 size={32} />
                <ExternalLink size={20} className="text-brand-slate group-hover:text-brand-teal transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-lightestSlate group-hover:text-brand-teal transition-colors mb-3">
                {repo.title}
              </h3>
              <p className="text-sm text-brand-slate mb-6 flex-grow">
                {repo.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-slate mt-auto">
                <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                {repo.tech}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
