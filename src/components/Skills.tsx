import { motion } from 'framer-motion';

const skills = [
  { category: 'Programming Languages', items: ['Python', 'C++', 'Java', 'JavaScript'] },
  { category: 'Databases & ORMs', items: ['PostgreSQL', 'SQL'] },
  { category: 'Web Frameworks & Libraries', items: ['Flask', 'FastAPI', 'REST API', 'HTML/CSS', 'NumPy'] },
  { category: 'Tools & Platforms', items: ['Git', 'Docker', 'Metabase', 'AWS'] }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          My toolkit for building secure, scalable applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl hover:bg-zinc-800/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(item => (
                <span key={item} className="px-3 py-1 text-sm font-medium text-zinc-300 bg-white/5 rounded-full border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
