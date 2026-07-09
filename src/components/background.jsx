import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
      
      {/* Animated Dot Matrix Pattern */}
      <motion.div 
        className="absolute inset-[-50%]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        animate={{
          x: [0, -24],
          y: [0, -24],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear"
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-200/50 rounded-full blur-[120px] mix-blend-multiply"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1], 
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-200/50 rounded-full blur-[120px] mix-blend-multiply"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1], 
          x: [0, 30, 0],
          y: [0, 50, 0],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
    </div>
  );
}
