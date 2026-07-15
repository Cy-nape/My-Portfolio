import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Vellore Institute of Technology, Bhopal',
    location: 'Bhopal, Madhya Pradesh',
    degree: 'B.Tech in Cybersecurity and Digital Forensics',
    duration: 'Sep 2023 - Present',
    score: 'CGPA: 9.05'
  },
  {
    institution: 'Maa Lodhi Devi Yaduvanshi Shiksha Niketan',
    location: 'Sohali, Jhunjhunu, Rajasthan',
    degree: 'Class XII',
    duration: 'Apr 2021 - July 2022',
    score: '96.4%'
  },
  {
    institution: 'Maa Lodhi Devi Yaduvanshi Shiksha Niketan',
    location: 'Sohali, Jhunjhunu, Rajasthan',
    degree: 'Class X',
    duration: 'Apr 2019 - July 2020',
    score: '92.8%'
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          My academic background.
        </p>
      </motion.div>

      <div className="space-y-6 flex flex-col items-center">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full glass p-6 rounded-2xl relative overflow-hidden group flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-white/10 group-hover:bg-white/30 transition-colors duration-300" />
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <div className="text-zinc-400 text-sm mt-1">{item.institution} — {item.location}</div>
            </div>
            
            <div className="flex flex-col md:items-end text-left md:text-right">
              <span className="text-zinc-300 font-semibold">{item.score}</span>
              <span className="text-zinc-500 text-sm">{item.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
