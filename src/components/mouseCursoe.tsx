"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      console.log(e);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
  };
  return (
    <motion.div
      className="cursor bg-black bg-opacity-[10%]"
      variants={variants}
      animate={"default"}
      whileTap={{ scale: 1.5 }}
    ></motion.div>
  );
};

export default MouseCursor;
