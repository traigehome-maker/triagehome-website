"use client";

// src/components/AnimatedSection.jsx
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ViewAnimation = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-4"
    >
      {children}
    </motion.div>
  );
};

export default ViewAnimation;
