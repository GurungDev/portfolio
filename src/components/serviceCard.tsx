"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="m-5 w-full"
    >
      <div className="h-full overflow-hidden backdrop-blur-xl rounded-xl w-full border-2 transition-all duration-300 hover:shadow-lg">
        <div className={cn("h-2 w-full", color)} />
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <motion.div
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-full p-2 ",
                color.replace("bg-gradient-to-br", "text-white")
              )}
            >
              <Icon className="h-10 w-10" />
            </motion.div>
          </div>
          <h3 className="my-7 text-light c3 ">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

