"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import ParallaxText from "./scrollTextAnimation";
const IntroComp = () => {
  return (
    <div
      className="relative h-[100dvh] bg-dark border-y-[10px]  border-primary  w-full m-auto overflow-hidden"
      style={{"backgroundImage" : `url('bg1.svg'); background-repeat: no-repeat; background-size: cover`}}
    >
      
      {/* Background Image */}
      <Image
        src="/bio/p2.png"
        width={550}
        height={750}
        quality={100}
        alt="Picture of the author"
        className="absolute left-[50%]  z-[1] bottom-0"
      />

      {/* Overlay with Background Color */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[10%] z-[1]"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="absolute z-[2] w-full top-[20%]"
      >
        <div className="w-[60%] m-auto">
          <GoArrowDownRight size={40} className="mb-8" />

          <p className="text-light c4 text-4xl font-[200] ">
            Hello, I&apos;m Freelance
          </p>

          <p className="text-light c4 text-4xl font-[200] ">
            Full-Stack DevOps Engineer
          </p>
          <button className="button-1 px-4 py-2 my-6">Download Resume</button>
        </div>
      </motion.div>
      <div className="absolute top-20 right-0">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 350 }}
          transition={{ duration: .5, ease: 'easeOut' }}

          className=" my-10 rounded-l-xl h-[30px] bg-light"
        ></motion.div>
      </div>

      <div className="absolute top-60">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 200 }}
          transition={{ duration: .3, ease: 'easeOut' }}

          className=" my-10 rounded-r-xl h-[30px] bg-light"
        ></motion.div>
       </div>
      
      <div className="absolute bottom-0 ">
        <div className=" no-scrollbar  h-[300px]  ">
          <div className="">
            <ParallaxText baseVelocity={2}>Nishan Gurung</ParallaxText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComp;
