import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full"
      >
        <motion.p variants={itemVariants} className="text-zinc-400 font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
          Security & Software Engineer
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Sahil Kulhar
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl text-zinc-300 font-medium mb-8 leading-relaxed max-w-3xl">
          Engineering secure systems, AI-powered tools, and automated workflows.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Pursuing my B.Tech in Cybersecurity & Digital Forensics at VIT. I specialize in building secure full-stack applications, cryptography tools, and integrating machine learning into DevSecOps workflows.
        </motion.p>
      </motion.div>
    </section>
  );
}
