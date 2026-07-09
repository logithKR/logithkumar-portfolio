import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Award } from "lucide-react";

export function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-900/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative border border-slate-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full flex items-center justify-center transition-all shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Left Side: Details */}
          <div className="w-full md:w-1/3 p-8 md:p-10 bg-slate-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Award size={24} />
            </div>
            
            <p className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-2">Certificate</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {certificate.title}
            </h2>
            
            <div className="flex items-center gap-2 text-slate-600 mb-6">
              <span className="font-semibold text-slate-800">{certificate.issuer}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{certificate.date}</span>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              {certificate.description}
            </p>

            <div className="mt-auto">
              <a
                href={certificate.file}
                download
                className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-violet-200"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>

          {/* Right Side: PDF Preview */}
          <div className="w-full md:w-2/3 h-[50vh] md:h-full bg-slate-200 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-white flex flex-col items-center justify-center">
              <iframe 
                src={`${certificate.file}#toolbar=0&view=FitH`} 
                className="w-full h-full border-none"
                title={certificate.title}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
