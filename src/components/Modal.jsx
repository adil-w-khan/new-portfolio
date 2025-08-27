import { motion } from "framer-motion";

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <motion.div
        className="bg-neutral-900 rounded-xl p-6 max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
