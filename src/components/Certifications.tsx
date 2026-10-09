import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const certificatesData = [
  {
    image: "/certificate-1.png",
    course: "Blockchain and Cryptocurrency",
    issuer: "NPTEL, IIT Kharagpur",
    highlights: "2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7326278554411843584/"
  },
  {
    image: "/certificate-2.png", 
    course: "Cybersecurity Analyst",
    issuer: "IBM",
    highlights: "Professional Certificate",
    link: "https://courses.vit.skillsnetwork.site/certificates/8cdf142b7c5a4e00b3367c7d7ac9c1d1/"
  },
  {
    image: "/certificate-3.png",
    course: "Certified Solutions Architect — Associate",
    issuer: "AWS",
    highlights: "SAA-C03",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/d28f2f75ea4f4108a2a3d3998c25892c/"
  }
];

const getRandomRotation = (index: number) => {
  const angles = [-6, 4, -3, 7, -8, 2, 5, -4];
  return angles[index % angles.length];
};

const cardVariants: Variants = {
  idle: (custom: any) => ({
    x: "0%",
    y: ["0%", `${custom.i % 2 === 0 ? -5 : 5}%`, "0%", `${custom.i % 2 === 0 ? 5 : -5}%`, "0%"],
    rotate: [
      getRandomRotation(custom.i), 
      getRandomRotation(custom.i) + 2, 
      getRandomRotation(custom.i) - 2, 
      getRandomRotation(custom.i)
    ],
    scale: 1 - (custom.i * 0.02),
    opacity: 1 - (custom.i * 0.05),
    filter: "blur(0px) brightness(1)",
    zIndex: certificatesData.length - custom.i,
    transition: {
      y: { repeat: Infinity, duration: 5 + custom.i * 0.5, ease: "easeInOut" },
      rotate: { repeat: Infinity, duration: 6 + custom.i * 0.5, ease: "easeInOut" },
      scale: { type: "spring", stiffness: 200, damping: 20 },
      opacity: { duration: 0.3 }
    }
  }),
  grid: (custom: any) => ({
    x: custom.isHovered ? "0%" : `${custom.xOffset}%`,
    y: custom.isHovered ? "-5%" : `${custom.yOffset}%`,
    rotate: 0,
    scale: custom.isHovered ? 2.5 : (custom.isDimmed ? 0.9 : 1),
    opacity: 1,
    filter: custom.isDimmed ? "blur(6px) brightness(0.4)" : "blur(0px) brightness(1)",
    zIndex: custom.isHovered ? 50 : 10,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: custom.isFanningOut ? custom.i * 0.02 : 0 
    }
  })
};

export default function Certifications() {
  const [isFannedOut, setIsFannedOut] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeData = hoveredIndex !== null ? certificatesData[hoveredIndex] : null;
  const activeText = activeData ? `${activeData.course} • ${activeData.issuer} • ${activeData.highlights} • ` : "";
  const repeatedText = activeText.repeat(5);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
        <p className="text-zinc-400 max-w-2xl text-lg mx-auto">
          Click the anti-gravity stack to view my professional credentials in a grid format.
        </p>
      </motion.div>

      <div 
        className="relative w-full h-[600px] flex items-center justify-center cursor-pointer"
        onClick={() => {
          setIsFannedOut(!isFannedOut);
          if (isFannedOut) setHoveredIndex(null);
        }}
        onMouseLeave={() => { if (!isFannedOut) setHoveredIndex(null); }}
      >
        {/* Revolving Background Text Layer */}
        <AnimatePresence>
          {hoveredIndex !== null && isFannedOut && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 25, ease: "linear" },
                opacity: { duration: 0.4 },
                scale: { type: "spring" }
              }}
              className="absolute inset-0 m-auto w-[800px] h-[800px] pointer-events-none flex items-center justify-center z-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full text-white fill-current">
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                <text>
                  <textPath href="#circlePath" startOffset="0%" className="text-[9px] font-mono uppercase tracking-widest">
                    {repeatedText}
                  </textPath>
                </text>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Central Info Box */}
        <AnimatePresence>
          {hoveredIndex !== null && activeData && isFannedOut && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-4 sm:bottom-12 z-[60] flex flex-col items-center bg-black/70 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/20 shadow-2xl pointer-events-none"
            >
              <h3 className="text-white font-bold text-xl md:text-2xl text-center">{activeData.course}</h3>
              <p className="text-zinc-300 text-sm md:text-base mt-1 text-center">{activeData.issuer}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs md:text-sm font-semibold">
                  {activeData.highlights}
                </div>
                {activeData.link && (
                  <span className="text-zinc-400 text-xs font-mono">Click card to verify →</span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certificate Cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {certificatesData.map((cert, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const xOffset = (col - 1) * 120; // Adjusted for 3 items
            const yOffset = (row - 0) * 120;
            const isHovered = hoveredIndex === i;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

            return (
              <motion.div
                key={cert.course}
                className="absolute w-32 sm:w-48 md:w-56 lg:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 glass cursor-pointer"
                style={{ transformOrigin: "center center" }}
                custom={{ i, xOffset, yOffset, isHovered, isDimmed, isFanningOut: isFannedOut && hoveredIndex === null }}
                variants={cardVariants}
                initial="idle"
                animate={isFannedOut ? "grid" : "idle"}
                onMouseEnter={() => { if (isFannedOut) setHoveredIndex(i); }}
                onMouseLeave={() => { if (isFannedOut) setHoveredIndex(null); }}
                onClick={(e) => {
                  if (isFannedOut && cert.link) {
                    e.stopPropagation();
                    window.open(cert.link, '_blank', 'noopener noreferrer');
                  }
                }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.course} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-32 border-t border-white/10 pt-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300" />
            <h4 className="text-xl font-bold text-white mb-2">ZS Campus Beats Tech Challenge</h4>
            <p className="text-zinc-400">Ranked among the <strong className="text-white">Top 100 teams nationwide</strong> in 2026.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 group-hover:bg-red-400 transition-colors duration-300" />
            <h4 className="text-xl font-bold text-white mb-2">AMD Slingshot Hackathon</h4>
            <p className="text-zinc-400">Reached the <strong className="text-white">Top 10 teams in the state</strong>.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
