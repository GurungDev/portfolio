"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="h-[300px] flex items-center justify-center"
    >
      {words.map((word, index) => (
        <p key={index} className="tagline  ">
          {" "}
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            className="text-dark font-bold   "
          >
            {word}
          </motion.span>
        </p>
      ))}
    </motion.div>
  );
}
