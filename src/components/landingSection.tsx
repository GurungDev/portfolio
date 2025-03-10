"use client";
import React from "react";
import Lottie from "lottie-react";
import animation from "../animations/profile.json";
import title from "../animations/heaader.json";

const LandingSection = () => {
  return (
    <div className="relative">
      {" "}
      <div className="  flex items-center justify-center min-[1100px]:justify-around flex-col bg-neutral-100 bg-opacity-100 custom-border md:flex-row h-[100vh] ">
        <Lottie
          animationData={title}
          className="w-[80%]  min-[1100px]:w-[50%] "
        />
        <Lottie
          animationData={animation}
          className="w-[50%] min-[1100px]:w-[20%] custom-border "
        />
      </div>
    </div>
  );
};

export default LandingSection;
