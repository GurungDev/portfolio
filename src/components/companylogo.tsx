"use client";
import React from "react";
import Lottie from "lottie-react";
import plan from "../animations/plan.json";
import design from "../animations/design.json";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";
import build from "../animations/build.json";
import host from "../animations/host.json";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

interface ParallaxProps {
  baseVelocity: number;
}

const Logos = [
  {
    logo: "/lazyfish.png",
    link: "https://lazyfish.com",
  },
  {
    logo: "/pl.png",
    link: "https://www.perfectlegionlda.pt",
  },
  {
    logo: "/waa.png",
    link: "https://www.waatech.com",
  },
  {
    logo: "/yetilabs.svg",
    link: "https://www.yetilabs.com",
  },
  {
    logo: "/enirman.svg",
    link: "https://www.enirmanhomes.com/",
  },
  {
    logo: "/ak.jpg",
    link: "https://www.ackresponse.com/",
  },
];

export default function CompanyLogos({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="bg-dark relative pb-20">
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-right "
        >
          <h3 className="app-layout c6  text-light font-[600] my-20">
            COMPANIES WHERE I WORKED
          </h3>
        </motion.div>
      </div>
      <div className="absolute top-20 ">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 350 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" my-10 rounded-r-xl h-[30px] bg-light"
        ></motion.div>
      </div>

      <div className="parallax ">
        <motion.div className="scroller" style={{ x }}>
          <div className=" bg-dark">
            <div className="flex  items-center justify-around py-20 w-[300vw] min-[1100px]:w-[200vw] lg:w-[110pw]">
              {Logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid group hover:scale-125 overflow-hidden duration-500 items-center justify-center p-5 rounded-full shadow-xl bg-light"
                >
                  <Image
                    src={logo.logo}
                    alt="plan"
                    width={200}
                    height={200}
                    className="w-[150px] h-[150px] duration-500"
                  />
                </a>
              ))}
                {Logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid group hover:scale-125 duration-500 items-center justify-center p-5 rounded-full shadow-xl bg-light"
                >
                  <Image
                    src={logo.logo}
                    alt="plan"
                    width={200}
                    height={200}
                    className="w-[150px] h-[150px] duration-500"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 right-0">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 350 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" my-10 rounded-l-xl h-[30px] bg-light"
        ></motion.div>
      </div>
    </div>
  );
}

