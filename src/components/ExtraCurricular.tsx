import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const activities = [
  {
    emoji: '🤼‍♂️',
    title: 'Kabaddi Tournament',
    detail: 'Runner-up in the College Kabaddi Tournament.',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
  },
  {
    emoji: '🏋️',
    title: 'Weightlifting Competition',
    detail: 'Secured 2nd position in the Heavyweight Category at the college weightlifting competition.',
    color: 'from-orange-500/20 to-amber-500/10',
    border: 'hover:border-orange-500/40',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]',
  },
  {
    emoji: '🎪',
    title: 'Rajasthan Club — Core Member',
    detail: 'Served as a Core Member of the Rajasthan Club in college, contributing as a PR Team Member.',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'hover:border-violet-500/40',
    glow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

export default function ExtraCurricular() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Extra Curricular</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Beyond the code — sports, community, and campus life.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {activities.map((activity) => (
          <motion.div
            key={activity.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className={`relative group glass rounded-2xl p-6 border border-white/5 ${activity.border} ${activity.glow} transition-all duration-300 overflow-hidden cursor-default`}
          >
            {/* Gradient bg */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Animated rings on hover */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/5 group-hover:border-white/15 transition-colors duration-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full border border-white/5 group-hover:border-white/10 transition-colors duration-500"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-4xl mb-4 select-none"
                whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                {activity.emoji}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{activity.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
