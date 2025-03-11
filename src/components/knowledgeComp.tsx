"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Palette, Server } from "lucide-react";
import { ServiceCard } from "./serviceCard";
import dynamic from "next/dynamic";
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);
const KnowledgeComp = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Creating responsive, modern websites and web applications tailored to your needs.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      
    },
    {
      icon: Palette,
      title: "Prototyping",
      description:
        "Rapidly creating interactive prototypes to visualize and test design concepts before development.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      
    },
    {
      icon: Palette,
      title: "Wireframing",
      description:
        "Structuring layouts and user flows with detailed wireframes to ensure a seamless user experience.",
      color: "bg-gradient-to-br from-gray-500 to-gray-400",
      
    },
    {
      icon: Server,
      title: "DevOps",
      description:
        "Automating infrastructure provisioning, CI/CD pipelines, containerization, and monitoring to ensure high availability and performance.",
      color: "bg-gradient-to-br from-teal-500 to-blue-500",
      
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs that power your digital products.",
      color: "bg-gradient-to-br from-green-500 to-emerald-400",
      
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Architecting efficient database solutions that scale with your business needs.",
      color: "bg-gradient-to-br from-amber-500 to-orange-400",
      
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development services from concept to deployment and maintenance.",
      color: "bg-gradient-to-br from-red-500 to-rose-400",
      
    },
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Specialized solutions tailored to your unique business challenges and requirements.",
      color: "bg-gradient-to-br from-violet-500 to-indigo-400",
      
    },

    {
      icon: Globe,
      title: "Domain & Website Hosting",
      description:
        "Providing domain registration and reliable hosting solutions to keep your website fast, secure, and always online.",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      height: 250,
    },
  ];

  return (
    <div className=" bg-dark relative pb-40">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[10%] z-[1]"></div>

      <div className="">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" "
        >
          <h1 className="app-layout  min-[1100px]:text-[8rem] text-light font-[600] py-40 ">
            EXPERTISE
          </h1>
        </motion.div>
      </div>
      <div className="absolute top-20 right-0">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" rounded-l-xl h-[20px] bg-highlight"
        ></motion.div>
      </div>
      <div className="absolute top-40 right-0">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 300 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" rounded-l-xl h-[20px] bg-highlight"
        ></motion.div>
      </div>
      <div className="absolute top-0 left-0">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 200 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" rounded-r-xl h-[20px] bg-highlight"
        ></motion.div>
      </div>
      <section className="app-layout">
        <div className="">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {services.map((service, index) => (
                <ServiceCard
                  key={index} 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeComp;
