import { motion } from "framer-motion";

const PageLayout = ({ children, className = "" }) => {
  return (
    <motion.main
      className={`min-h-screen w-full px-4 sm:px-8 lg:px-16 py-8 bg-black text-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
};

export default PageLayout;
