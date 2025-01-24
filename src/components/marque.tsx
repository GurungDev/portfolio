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



interface ParallaxProps {
  baseVelocity: number;
}

export default function MarqueeComponent({
  baseVelocity = 100,
}: ParallaxProps) {
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
    <div className="parallax ">
      <motion.div
        className="scroller"
        style={{ x }}
      >
        <div className=" bg-highlight">
          <div className="flex  items-center justify-around py-20 w-[320vw] min-[1100px]:w-[200vw] lg:w-[120vw]">
            <div className="grid group items-center justify-center custom-border2 shadow-xl bg-neutral-500">
              <Lottie
                animationData={plan}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Plan</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={design}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Design</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-500">
              <Lottie
                animationData={build}
                className="w-[200px] group-hover:scale-[1.1] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Build</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={host}
                className="w-[200px] group-hover:scale-[1.2] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Host</h1>
            </div>

            <GoArrowRight size={40} className=" text-primary" />
          </div>
        </div>
        <div className=" bg-highlight">
          <div className="flex  items-center justify-around py-20 w-[320vw] min-[1100px]:w-[200vw] lg:w-[120vw]">
            <div className="grid group items-center justify-center custom-border2 shadow-xl bg-neutral-500">
              <Lottie
                animationData={plan}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Plan</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={design}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Design</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-500">
              <Lottie
                animationData={build}
                className="w-[200px] group-hover:scale-[1.1] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Build</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={host}
                className="w-[200px] group-hover:scale-[1.2] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Host</h1>
            </div>

            <GoArrowRight size={40} className=" text-primary" />
          </div>
        </div>
        <div className=" bg-highlight">
          <div className="flex  items-center justify-around py-20 w-[320vw] min-[1100px]:w-[200vw] lg:w-[120vw]">
            <div className="grid group items-center justify-center custom-border2 shadow-xl bg-neutral-500">
              <Lottie
                animationData={plan}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Plan</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={design}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Design</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-500">
              <Lottie
                animationData={build}
                className="w-[200px] group-hover:scale-[1.1] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Build</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={host}
                className="w-[200px] group-hover:scale-[1.2] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Host</h1>
            </div>

            <GoArrowRight size={40} className=" text-primary" />
          </div>
        </div>
        <div className=" bg-highlight">
          <div className="flex  items-center justify-around py-20 w-[320vw] min-[1100px]:w-[200vw] lg:w-[120vw]">
            <div className="grid group items-center justify-center custom-border2 shadow-xl bg-neutral-500">
              <Lottie
                animationData={plan}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Plan</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={design}
                className="w-[200px] group-hover:scale-[1.4] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Design</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-500">
              <Lottie
                animationData={build}
                className="w-[200px] group-hover:scale-[1.1] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Build</h1>
            </div>
            <GoArrowRight size={40} className=" text-primary" />

            <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
              <Lottie
                animationData={host}
                className="w-[200px] group-hover:scale-[1.2] duration-500"
              />

              <h1 className=" c2 text-neutral-300 w-full ">Host</h1>
            </div>

            <GoArrowRight size={40} className=" text-primary" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
