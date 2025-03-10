"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Palette, Server } from "lucide-react";
import { ServiceCard } from "./serviceCard";
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
      title: "UI/UX Design",
      description:
        "Crafting intuitive user interfaces and engaging user experiences that delight customers.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
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
  ];

  return (
    <div className=" bg-light relative pb-40">
      <div className="overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" "
        >
          <h3 className="app-layout text-[8rem]  font-[600] py-40 ">
            Expertise
          </h3>
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
      <section  className="app-layout">
        <div className="">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full ">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeComp;
