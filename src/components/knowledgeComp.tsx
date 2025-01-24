"use client"
import React from "react";
import { motion } from "framer-motion";

const KnowledgeComp = () => {
  return (
    <div className=" bg-light relative pb-40">
      <div className="overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" "
        >
          <h3 className="app-layout text-[8rem]  font-[600] py-40 ">Expertise</h3>
        </motion.div>
      </div>
      <div className="absolute top-0 right-60">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 200 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" rounded-b-xl w-[20px] bg-highlight"
        ></motion.div>
      </div>
    </div>
  );
};

export default KnowledgeComp;
