"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import React from "react";

const MouseCursoe = () => {
  return (
    <div>
      <AnimatedCursor innerScale={1.3} outerScale={1.5} color="28,169,201" innerSize={10} showSystemCursor innerStyle={{}} outerSize={30}/>
    </div>
  );
};



export default MouseCursoe;
