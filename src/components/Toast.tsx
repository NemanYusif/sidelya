import { useStore } from '../store';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const toast = useStore((state) => state.toast);
  const clearToast = useStore((state) => state.clearToast);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg max-w-sm w-[90vw] md:w-auto backdrop-blur-md
            bg-white/95 border-neutral-200 text-neutral-900
            dark:bg-neutral-900/95 dark:border-neutral-800 dark:text-neutral-50"
          id="toast-notification"
        >
          {toast.type === 'success' && (
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" id="toast-success-icon" />
          )}
          {toast.type === 'error' && (
            <XCircle className="h-5 w-5 text-rose-500 shrink-0" id="toast-error-icon" />
          )}
          {toast.type === 'info' && (
            <Info className="h-5 w-5 text-blue-500 shrink-0" id="toast-info-icon" />
          )}
          
          <p className="text-sm font-medium tracking-wide flex-1 font-sans" id="toast-text">
            {toast.text}
          </p>

          <button
            onClick={clearToast}
            className="rounded p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            id="toast-close-btn"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
