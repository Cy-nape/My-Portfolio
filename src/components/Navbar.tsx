import { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Navbar() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setIsImageOpen(true)}
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-white/90 hover:text-white transition-colors"
          >
            <motion.img 
              layoutId="profile-image"
              src="/Myimage.jpg" 
              alt="Sahil" 
              className="w-9 h-9 rounded-full object-cover border border-zinc-700 shadow-sm" 
            />
            Sahil<span className="text-zinc-500"> </span>
          </button>

          <nav className="flex items-center gap-6">
            <SocialLink href="https://github.com/Cy-nape" icon={<GithubIcon size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/sahil-kulhar" icon={<LinkedinIcon size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:sahilkulhar01@gmail.com" icon={<Mail size={20} />} label="Email" />
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isImageOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.img 
              layoutId="profile-image"
              src="/Myimage.jpg"
              alt="Sahil"
              className="relative z-10 w-full max-w-sm rounded-full aspect-square object-cover shadow-2xl border border-zinc-800 cursor-pointer"
              onClick={() => setIsImageOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const [copied, setCopied] = useState(false);
  const isMailto = href.startsWith('mailto:');

  const handleClick = () => {
    if (isMailto) {
      const email = href.replace('mailto:', '');
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        aria-label={label}
        onClick={handleClick}
        className="text-zinc-400 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
      >
        {icon}
      </a>
      {copied && (
        <span className="absolute -bottom-10 text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded shadow-lg whitespace-nowrap">
          Email copied!
        </span>
      )}
    </div>
  );
}
