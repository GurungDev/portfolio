"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
          className="relative group bg-red-200 row-span-2 h-[80vh] rounded-xl boxes"
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
           <div>
            <Image
              src="/lzm.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
          <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-light font-bold ">Lazy Fish Restaurant</h3>
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
          className="relative  group bg-black rounded-xl boxes"
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
          <div>
            <Image
              src="/lzm.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
          <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-light font-bold ">Lazy Fish Restaurant</h3>
          </div>
        </motion.div>

        {/* Fifth Box */}
        <motion.div
          className="relative  bg-red-300 row-span-2 col-span-2 group rounded-l-xl boxes"
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
          <div>
            <Image
              src="/lzm.png"
              width={800}
              height={800}
              alt="Picture of the author"
              className="absolute group-hover:scale-[110%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
          <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-light font-bold ">Lazy Fish Restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </motion.div>

        {/* Sixth Box */}
        <motion.div
          className="relative  group bg-red-300 col-span-2 rounded-xl boxes"
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
          <div>
            <Image
              src="/lzm.png"
              width={600}
              height={600}
              alt="Picture of the author"
              className="absolute group-hover:scale-[110%] group-hover:z-[2] duration-300 inset-0 top-[-20%]  z-[1] rounded-xl"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
          <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-light font-bold ">Lazy Fish Restaurant</h3>
          
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
