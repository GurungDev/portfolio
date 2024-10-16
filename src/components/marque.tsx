"use client";
import React from "react";
import Lottie from "lottie-react";
import plan from "../animations/plan.json";
import design from "../animations/design.json";

import build from "../animations/build.json";

import host from "../animations/host.json";

import Marquee from "react-fast-marquee";
import { GoArrowRight } from "react-icons/go";

const MarqueeComponent = () => (
  <Marquee direction="left" className="marquee bg-neutral-900 ">
    <div className="flex  items-center justify-around py-10 w-[350vw] min-[1100px]:w-[200vw] lg:w-[120vw]">
      <div className="grid group items-center justify-center custom-border2 shadow-xl bg-neutral-500">
        <Lottie animationData={plan} className="w-[320px] group-hover:scale-[1.4] duration-500" />

        <h1 className=" c2 text-neutral-300 w-full ">Plan</h1>
      </div>
      <GoArrowRight size={40} className=" text-red-400" />

      <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
        <Lottie animationData={design} className="w-[300px] group-hover:scale-[1.4] duration-500" />

        <h1 className=" c2 text-neutral-300 w-full ">Design</h1>
      </div>
      <GoArrowRight size={40} className=" text-red-400" />

      <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-500">
        <Lottie animationData={build} className="w-[350px] group-hover:scale-[1.1] duration-500" />

        <h1 className=" c2 text-neutral-300 w-full ">Build</h1>
      </div>
      <GoArrowRight size={40} className=" text-red-400" />

      <div className="grid group items-center justify-center custom-border2 shadow-xl  bg-neutral-700">
        <Lottie animationData={host} className="w-[290px] group-hover:scale-[1.2] duration-500" />

        <h1 className=" c2 text-neutral-300 w-full ">Host</h1>
      </div>

      <GoArrowRight size={40} className=" text-red-400" />
    </div>
  </Marquee>
);

export default MarqueeComponent;
