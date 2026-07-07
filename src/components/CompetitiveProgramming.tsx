import { motion } from 'framer-motion';

const profiles = [
  {
    platform: 'LeetCode',
    username: 'SzyUJYcPtU',
    rating: 'Active Problem Solver',
    color: 'group-hover:border-leetcode group-hover:shadow-[0_0_30px_-5px_rgba(255,161,22,0.3)]',
    textHighlight: 'text-leetcode',
    link: 'https://leetcode.com/u/SzyUJYcPtU/',
  },
  {
    platform: 'Codeforces',
    username: 'Cy-nape',
    rating: 'Active Competitor',
    color: 'group-hover:border-codeforces group-hover:shadow-[0_0_30px_-5px_rgba(49,140,231,0.3)]',
    textHighlight: 'text-codeforces',
    link: 'https://codeforces.com/profile/Cy-nape',
  },
  {
    platform: 'DevSecOps & GitHub',
    username: 'Cy-nape',
    rating: 'Security Auditing & ML Tooling',
    color: 'group-hover:border-security group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    textHighlight: 'text-security',
    link: 'https://github.com/Cy-nape',
  }
];

export default function CompetitiveProgramming() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Algorithms & Security</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Sharpening algorithmic thinking, data structures, and security auditing through hands-on practice and open-source contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.platform}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group block glass p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${profile.color}`}
          >
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">{profile.platform}</h3>
            <p className="text-zinc-400 mb-4 font-mono text-sm">@{profile.username}</p>
            <p className={`font-medium ${profile.textHighlight}`}>{profile.rating}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
