import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURATION ---
// Swap in your actual usernames here!
const PROFILES = {
  leetcode: 'Sahil_kulhar',
  codeforces: 'Cy-nape',
  github: 'Cy-nape' // Your GitHub username
};

// --- TYPES ---
interface LeetCodeStats {
  status: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

interface CodeforcesStats {
  rating: number;
  rank: string;
  maxRating: number;
}

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export default function CompetitiveProgramming() {
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);
  const [cfStats, setCfStats] = useState<CodeforcesStats | null>(null);
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStats = async () => {
      setLoading(true);
      
      try {
        // 1. Fetch LeetCode
        const lcRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${PROFILES.leetcode}`);
        if (lcRes.ok && isMounted) {
          const lcData = await lcRes.json();
          if (lcData.status === 'success') {
            setLcStats(lcData);
          }
        }
      } catch (e) {
        console.error("LeetCode fetch error:", e);
      }

      try {
        // 2. Fetch Codeforces
        const cfRes = await fetch(`https://codeforces.com/api/user.info?handles=${PROFILES.codeforces}`);
        if (cfRes.ok && isMounted) {
          const cfData = await cfRes.json();
          if (cfData.status === 'OK' && cfData.result.length > 0) {
            setCfStats(cfData.result[0]);
          }
        }
      } catch (e) {
        console.error("Codeforces fetch error:", e);
      }

      try {
        // 3. Fetch GitHub
        const ghRes = await fetch(`https://api.github.com/users/${PROFILES.github}`);
        if (ghRes.ok && isMounted) {
          const ghData = await ghRes.json();
          setGhStats(ghData);
        }
      } catch (e) {
        console.error("GitHub fetch error:", e);
      }

      if (isMounted) setLoading(false);
    };

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Competitive Programming & Coding</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Live statistics highlighting my problem-solving journey and open-source contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEETCODE CARD */}
        <motion.a
          href={`https://leetcode.com/u/${PROFILES.leetcode}/`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group block glass p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-leetcode hover:shadow-[0_0_30px_-5px_rgba(255,161,22,0.3)] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#ffa116]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.967 5.68c.83.791 2.022.791 2.852 0l5.199-4.953c.386-.368.564-.867.564-1.312 0-.477-.237-.893-.564-1.205l-4.161-3.963a1.46 1.46 0 0 0-1.06-.4c-.381 0-.741.144-1.011.401l-1.921 1.826a1.29 1.29 0 0 1-.925.381 1.265 1.265 0 0 1-.9-.381 1.35 1.35 0 0 1 0-1.879l1.92-1.825a3.998 3.998 0 0 1 2.768-1.097c.983 0 1.916.35 2.651.989l4.16 3.963c1.082 1.031 1.637 2.454 1.637 3.93 0 1.442-.55 2.827-1.579 3.864l-5.199 4.954c-1.815 1.728-4.811 1.728-6.626 0l-5.967-5.679a8.625 8.625 0 0 1-1.848-2.235 8.358 8.358 0 0 1-.504-1.474 8.232 8.232 0 0 1-.091-3.528 8.077 8.077 0 0 1 1.824-3.155l3.853-4.125L11.56 1.32c.579-.606 1.636-.606 2.215 0l3.054 3.203a1.413 1.413 0 0 0 1.01.424c.382 0 .741-.144 1.011-.424l1.326-1.39A1.332 1.332 0 0 0 20.355 2c0-.368-.135-.724-.379-1.004L15.602.438A1.375 1.375 0 0 0 13.483 0zm4.21 14.86c-.524 0-.948.423-.948.948v4.966c0 .524.424.948.948.948h4.965c.524 0 .948-.424.948-.948v-4.966c0-.525-.424-.948-.948-.948h-4.965z" />
              </svg>
              LeetCode
            </h3>
            <span className="text-zinc-500 text-sm font-mono">@{PROFILES.leetcode}</span>
          </div>
          
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-zinc-800/50 rounded w-1/3"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-1/2"></div>
              <div className="flex gap-2 pt-4">
                <div className="h-2 bg-zinc-800/50 rounded w-1/3"></div>
                <div className="h-2 bg-zinc-800/50 rounded w-1/3"></div>
                <div className="h-2 bg-zinc-800/50 rounded w-1/3"></div>
              </div>
            </div>
          ) : lcStats ? (
            <div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-1">{lcStats.totalSolved}</div>
                <div className="text-zinc-400 text-sm">Problems Solved</div>
              </div>
              <div className="text-sm text-zinc-300 mb-4">
                Global Rank: <span className="text-leetcode font-medium">{lcStats.ranking.toLocaleString()}</span>
              </div>
              
              {/* Difficulty Progress Bar */}
              <div className="space-y-2">
                <div className="flex text-xs justify-between text-zinc-400 font-medium">
                  <span className="text-[#00b8a3]">Easy {lcStats.easySolved}</span>
                  <span className="text-[#ffc01e]">Med {lcStats.mediumSolved}</span>
                  <span className="text-[#ef4743]">Hard {lcStats.hardSolved}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full flex overflow-hidden">
                  <div style={{ width: `${(lcStats.easySolved / lcStats.totalSolved) * 100}%` }} className="bg-[#00b8a3]"></div>
                  <div style={{ width: `${(lcStats.mediumSolved / lcStats.totalSolved) * 100}%` }} className="bg-[#ffc01e]"></div>
                  <div style={{ width: `${(lcStats.hardSolved / lcStats.totalSolved) * 100}%` }} className="bg-[#ef4743]"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-zinc-400 py-4 h-[120px] flex flex-col justify-center">
              <p className="mb-2 text-sm">Unable to load live stats.</p>
              <span className="text-leetcode font-medium text-sm group-hover:underline">View Profile &rarr;</span>
            </div>
          )}
        </motion.a>

        {/* CODEFORCES CARD */}
        <motion.a
          href={`https://codeforces.com/profile/${PROFILES.codeforces}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group block glass p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-codeforces hover:shadow-[0_0_30px_-5px_rgba(49,140,231,0.3)] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#318CE7]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
              Codeforces
            </h3>
            <span className="text-zinc-500 text-sm font-mono">@{PROFILES.codeforces}</span>
          </div>

          {loading ? (
             <div className="animate-pulse space-y-4">
              <div className="h-8 bg-zinc-800/50 rounded w-1/3"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-1/2"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-2/3 mt-6"></div>
            </div>
          ) : cfStats ? (
            <div className="h-[120px] flex flex-col justify-between">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{cfStats.rating}</div>
                <div className="text-zinc-400 text-sm capitalize">{cfStats.rank || 'Unrated'}</div>
              </div>
              <div className="text-sm text-zinc-300">
                Max Rating: <span className="text-codeforces font-medium">{cfStats.maxRating}</span>
              </div>
            </div>
          ) : (
            <div className="text-zinc-400 py-4 h-[120px] flex flex-col justify-center">
              <p className="mb-2 text-sm">Unable to load live stats.</p>
              <span className="text-codeforces font-medium text-sm group-hover:underline">View Profile &rarr;</span>
            </div>
          )}
        </motion.a>

        {/* GITHUB CARD */}
        <motion.a
          href={`https://github.com/${PROFILES.github}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group block glass p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-zinc-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </h3>
            <span className="text-zinc-500 text-sm font-mono">@{PROFILES.github}</span>
          </div>

          {loading ? (
             <div className="animate-pulse space-y-4">
              <div className="h-8 bg-zinc-800/50 rounded w-1/3"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-1/2"></div>
              <div className="h-4 bg-zinc-800/50 rounded w-2/3 mt-6"></div>
            </div>
          ) : ghStats ? (
            <div className="h-[120px] flex flex-col justify-between">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{ghStats.public_repos}</div>
                <div className="text-zinc-400 text-sm">Public Repositories</div>
              </div>
              <div className="flex gap-4 text-sm text-zinc-300">
                <div>Followers: <span className="text-white font-medium">{ghStats.followers}</span></div>
                <div>Following: <span className="text-white font-medium">{ghStats.following}</span></div>
              </div>
            </div>
          ) : (
            <div className="text-zinc-400 py-4 h-[120px] flex flex-col justify-center">
              <p className="mb-2 text-sm">Unable to load live stats.</p>
              <span className="text-white font-medium text-sm group-hover:underline">View Profile &rarr;</span>
            </div>
          )}
        </motion.a>
        
      </div>
    </section>
  );
}
