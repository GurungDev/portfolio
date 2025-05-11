"use client";
import React from "react";
import { AnimatedText } from "./animatedText";
import Lottie from "lottie-react";
import animation from "../animations/project.json";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const TechnologyUsesComponent = () => {
  const { scrollYProgress } = useScroll(); // Get the scroll progress (0 to 1)

  // Map scroll progress to opacity and scale values
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.2]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1.8, 0.5]);

  const mobileScale = useTransform(scrollYProgress, [0.5, 1], [1.2, 0.8]);

  return (
    <div className="overflow-hidden">
      <div className="hidden min-[1100px]:block bg-highlight relative border-y-[10px] border-t-light  border-b-primary py-20 overflow-hidden h-[120dvh]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
          <div>
            <AnimatedText text="TECHNOLOGY THAT I USE" />
            <Lottie animationData={animation} className="  w-[50%] m-auto" />
          </div>
        </div>

        <motion.div
          style={{ scale: logoScale }} // Apply dynamic values
          className="absolute  w-full h-full opacity-100"
        >
          {" "}
          <Image
            src="/icons.png"
            width={1000}
            height={1000}
            className="m-auto w-[60%]"
            alt="Picture of the author"
          />
        </motion.div>
        <motion.div
          style={{ opacity, scale }} // Apply dynamic values
          className="absolute  w-full h-full "
        >
          <Image
            src="/iconsbg.png"
            alt="background objects"
            width={700}
            height={700}
            className=" w-[60%] m-auto  "
          />
        </motion.div>
      </div>
      <div className="bg-highlight  relative min-[1100px]:hidden">
        <motion.div
          style={{ scale: mobileScale }}
          className="w-[100%] h-[100dvh] "
        >
          <Image
            src="/m.svg"
            alt="background objects"
            fill
            quality={100}
            className="object-contain "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyUsesComponent;
