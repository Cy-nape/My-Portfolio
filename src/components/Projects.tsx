import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

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
    title: 'Zenith (AI-Powered Security Scanner)',
    description: 'Engineered an AI-powered security scanner and VS Code extension for real-time secret detection and dependency vulnerability analysis. Integrated the Microsoft Phi-3 (3.8B) model with ONNX Runtime, reducing regex-based false positives by 37.5%. Implemented a scanning engine leveraging the OSV API to detect vulnerabilities from a database of 50,000+ CVEs.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'ONNX Runtime', 'TypeScript', 'VS Code API'],
    image: '/image.png',
    links: { github: 'https://github.com/Cy-nape/ZENITH-V2.0.git', live: 'https://github.com/Cy-nape/ZENITH-V2.0/releases/tag/v0.1.0' }
  },
  {
    title: 'Image Steganography Web App',
    description: 'Built a secure web application using LSB Steganography, Huffman Coding, and Spread Spectrum to conceal encrypted text inside images. Achieved an average 56% compression and optimized processing with <25 ms encoding and <5 ms decoding for images up to 4 MB.',
    tags: ['Python', 'Flask', 'NumPy', 'Pillow', 'HTML/CSS', 'JavaScript'],
    image: '/imagestegnography.png',
    links: { github: 'https://github.com/Cy-nape/Image-Steganography.git', live: 'https://image-steganography-tawny.vercel.app/' }
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A selection of my recent work spanning full-stack web development and high-performance systems programming.
        </p>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="w-full md:w-3/5">
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.02}
          className="w-full rounded-2xl overflow-hidden glass p-2 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </Tilt>
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm font-medium text-zinc-300 bg-white/10 rounded-full border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {project.links.github && (
            <a href={project.links.github} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
              <span className="font-medium">Source</span>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
