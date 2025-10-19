import React from "react";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const profileImage = "https://i.postimg.cc/pVJk152X/unnamed-11.png";
  const linkedin = "https://www.linkedin.com/in/darapu-tejeswara-rao-423984386";

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#071031] to-[#001219] text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        <header className="relative px-8 py-10">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
              <img src={profileImage} alt="Profile" className="w-full h-full object-contain object-center" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Darapu Tejeswara Rao</h1>
              <p className="mt-1 text-indigo-200">Electronics & Communication Engineer • IoT • VLSI Intern • Motivated Muscles (YouTube)</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-indigo-600/30 hover:bg-indigo-500/40 text-sm">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </header>
      </div>
    </div>
  );
}