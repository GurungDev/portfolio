import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
  return (
    <div className="relative">
      <div className="fixed z-[1000] top-0 w-full py-3">
        <div className="flex justify-between items-center app-layout">
          <div className="group relative ">
            {" "}
            <h3 className="custom-border2 bg-dark p-3  group-hover:text-white text-white duration-300 font-[600]">
              NGr
              <span className="text-neutral-700 group-hover:text-white duration-300 ">
                .
              </span>
            </h3>
            {/* <div className="w-[0vw] h-[0vh] group-hover:w-[5.3vw] rounded-[2px] group-hover:h-[6vh] duration-500 -left-2 top-0 absolute z-[-5] bg-dark"></div>
            <div className="w-[0vw] h-[0vh] group-hover:h-[5vh]  rounded-[2px] group-hover:w-[5vw]  duration-500 left-5 top-3 absolute z-[-5] bg-blue-400"></div> */}
          </div>
          <div className="relative group/icon     bg-dark rounded-full p-3">
            <FaPlus
              size={20}
              className="group-hover/icon:rotate-90 duration-500 text-neutral-100"
            />
            <div className="absolute left-[500px] transform group-hover/icon:-left-[100px] group-hover/icon:right-[0px] delay-1000 group-hover/icon:delay-0   top-20 w-[300px] bg-highlight px-5 py-4 rounded-md shadow-lg  duration-500">
              <ul>
                {
                  navItems.map((item, index) => (
                    <li key={index} className="py-[.5]">
                      <Link
                        href={item.href}
                        className="group/menu flex items-center gap-5"
                      >
                        <div className="group-hover/menu:w-[20%] w-[5%] h-[2px] bg-white duration-300"></div>
                        <p className="text-white  transition duration-300">
                          {item.label}
                        </p>
                      </Link>
                    </li>
                  ))
                }
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
