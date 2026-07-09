import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1500;
    const interval = 15;
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] border border-slate-100 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] border border-violet-50 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Elegant Animated Logo */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-tr from-violet-600 to-indigo-500 rounded-2xl shadow-xl shadow-violet-200 mb-8 flex items-center justify-center"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["25%", "50%", "25%", "50%", "25%"],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 bg-white rounded-full shadow-inner" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LOGITHKUMAR
        </motion.h1>

        <motion.p
          className="text-slate-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Initializing Experience
        </motion.p>

        {/* Professional Progress Bar Container */}
        <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-violet-500 to-indigo-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
