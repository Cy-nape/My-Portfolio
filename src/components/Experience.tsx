import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          My professional journey and open-source contributions.
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-white transition-colors duration-300" />
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Workflow Automation Engineer</h3>
              <div className="text-zinc-400 font-medium text-lg">Slime (Community Project)</div>
            </div>
          </div>
          
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-white mt-1">▹</span>
              <span>Contributed to an open-source community project by engineering <strong className="text-white">50+ workflow automations</strong> using <strong className="text-white">REST APIs, OAuth 2.0, and Webhooks</strong> across multiple SaaS platforms.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-white mt-1">▹</span>
              <span>Designed event-driven workflows to synchronize data between Google Drive, Notion, Slack, and Discord through secure API integrations and real-time webhook processing.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
