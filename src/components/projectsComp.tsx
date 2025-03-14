"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectComp = () => {
  // Animation variants for reusable animations
  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 bg-light relative">
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-right "
        >
          <h3 className="app-layout lg:text-[8rem]  font-[600] my-20">
            PROJECTS
          </h3>
        </motion.div>
      </div>
      <div className="absolute top-20 ">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 350 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" my-10 rounded-r-xl h-[30px] bg-highlight"
        ></motion.div>
      </div>

      <div className=" hidden  min-[1100px]:grid justify-stretch overflow-hidden pl-20 min-[1100px]:grid-rows-4 gap-7 grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-4 ">
        {/* First Box */}
        <motion.div
          className="relative overflow-hidden  bg-red-200 row-span-2 h-[80vh] rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="left"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 1
          </div>
        </motion.div>

        {/* Second Box */}
        <motion.div
          className="relative overflow-hidden bg-red-300 col-span-2 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="top"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 2
          </div>
        </motion.div>

        {/* Third Box */}
        {/* <motion.div
          className="relative overflow-hidden bg-red-300 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="right"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 3
          </div>
        </motion.div> */}
        <div className="relative overflow-hidden overflow-hidden">
          <div className="absolute top-20 right-0">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 200 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" my-10 rounded-l-xl h-[30px] bg-highlight"
            ></motion.div>
          </div>
        </div>

        {/* Fourth Box */}
        <motion.div
          className="relative overflow-hidden bg-red-300 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="bottom"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 4
          </div>
        </motion.div>

        {/* Fifth Box */}
        <motion.div
          className="relative overflow-hidden bg-red-300 row-span-2 col-span-2 rounded-l-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="left"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 5
          </div>
        </motion.div>

        {/* Sixth Box */}
        <motion.div
          className="relative overflow-hidden bg-red-300 col-span-2 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="top"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 6
          </div>
        </motion.div>

        {/* Seventh Box */}
        <motion.div
          className="relative overflow-hidden bg-red-300 col-span-4 rounded-l-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="right"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 7
          </div>
        </motion.div>
      </div>

      <div className="grid min-[1100px]:hidden app-layout">
        <div
          className="relative overflow-hidden  bg-red-200 row-span-2 h-[80vh] rounded-xl boxes"
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
