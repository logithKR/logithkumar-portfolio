import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Wait for final progress bar render
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, scale: 1.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background animated rings */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] border border-white/5 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] border border-white/10 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] border border-violet-500/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Cool logo/shape animation */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.5)] mb-8"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LOGITHKUMAR K R
        </motion.h1>

        <motion.p
          className="text-slate-400 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Initializing Portfolio
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          {/* Animated Glow */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-violet-400 font-mono text-sm font-semibold">
          {Math.floor(progress)}%
        </div>
      </div>
    </motion.div>
  );
}
