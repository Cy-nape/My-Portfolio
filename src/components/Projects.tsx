import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: 'MANDIBHAV: Agricultural Price Analytics Platform',
    description: 'Built a Python data pipeline that collects live government data from a REST API and loads it into a PostgreSQL star schema with Fact and Dimension tables, using retry handling. Used SQL Window Functions (LAG, RANK, STDDEV) to calculate volatility and analyze MSP gaps. Cleaned data using Pandas and deployed an interactive Metabase dashboard via Docker.',
    tags: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Metabase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    links: { github: 'https://github.com/Cy-nape/MANDIBHAV.git' }
  },
  {
    title: 'Resume Builder: Containerized Web Application',
    description: 'Built a full-stack app using React/TypeScript and Flask with Docker Compose and Nginx. Integrated the Gemini API for resume feedback, bullet-point rewriting, and skill matching. Built a Dockerized LaTeX compilation workflow with isolated workspaces, enforced timeouts, and automatic cleanup.',
    tags: ['React', 'TypeScript', 'Python', 'Flask', 'Docker', 'Gemini API'],
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80',
    links: { github: 'https://github.com/Cy-nape/Make-it-and-crack-it-Dockerized-LaTeX-Resume-Builder.git' }
  },
  {
    title: 'Zenith: AI-Assisted Developer Security Tooling',
    description: 'Built an AI-assisted security tool with a FastAPI service, CLI, VS Code extension, and pre-commit hook to detect secrets. Integrated the OSV API to check vulnerable dependencies. Combined regex checks with a locally running Phi-3-mini LLM via Ollama for on-device review of flagged secrets.',
    tags: ['Python', 'FastAPI', 'Ollama', 'CLI', 'VS Code'],
    image: '/image.png',
    links: { github: 'https://github.com/Cy-nape/ZENITH-V2.0.git', live: 'https://github.com/Cy-nape/ZENITH-V2.0/releases/tag/v0.1.0' }
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-zinc-400 max-w-2xl text-lg mx-auto">
          A selection of my recent work spanning full-stack web development, AI tooling, and data engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col glass rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
    >
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
