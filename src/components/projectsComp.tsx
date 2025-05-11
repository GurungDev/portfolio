"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectComp = () => {
  // Animation variants for reusable animations
  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const projects = [
    {
      title: "Perfect Legion LDA",
      image: "/plm.png",
      description: "A single page portfolio website for a recruitment company.",
      link: "https://www.perfectlegionlda.pt",
    },
    {
      title: "ACKRESPONSE",
      image: "/ackresponsep.png",
      description: "",
      link: "https://www.ackresponse.com",
    },
    {
      title: "Lazy Fish Restaurant",
      image: "/lzm.png",
      description: "",
      link: "https://lazyfish.vercel.app",
    },
    {
      title: "Ava & Fre",
      image: "/rm.png",
      description: "",
      link: "https://recruitment-company.vercel.app/",
    },
    {
      title: "Gym Seek",
      image: "/gymseekp.png",
      description: "",
      link: "https://gymseek.vercel.app/",
    },
    {
      title: "Enirman",
      image: "/enirman.png",
      description: "",
      link: "https://www.enirmanhomes.com/",
    },
    {
      title: "WaaTech",
      image: "/waatech.png",
      description: "",
      link: "https://www.waatech.com",
    },
  ];

  return (
    <div className="py-20 bg-light relative">
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-right "
        >
          <h3 className="app-layout lg:text-[8rem]  font-[600] my-20">
            PROJECTS
          </h3>
        </motion.div>
      </div>
      <div className="absolute top-20 ">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 350 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" my-10 rounded-r-xl h-[30px] bg-highlight"
        ></motion.div>
      </div>

      <div className=" hidden  min-[1100px]:grid justify-stretch overflow-hidden pl-20 py-20 min-[1100px]:grid-rows-4 gap-7 grid-cols-1 md:grid-cols-2 min-[1100px]:grid-cols-4 ">
        {/* First Box */}
        <motion.div
          className="relative group row-span-2 h-[80vh] rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="left"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            href="https://www.perfectlegionlda.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/plm.png"
                width={600}
                height={600}
                alt="Perfect Legion mockup"
                className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0  z-[1] rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
            <div className="absolute  z-[2] group  duration-300 group-hover:top-[60%] transition-all group-hover:z-[3]  top-[50%]  left-[10%]">
              <h3 className="text-light font-bold ">Perfect Legion LDA </h3>
              <p className=" ">
                A single page portfolio website for recruitment company.
              </p>
            </div>
          </a>
        </motion.div>

        {/* Second Box */}
        <motion.div
          className="relative   group col-span-2 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="top"
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={variants}
        >
          <a
            href="https://www.ackresponse.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/ackresponsep.png"
                width={500}
                height={500}
                alt="ackresponse website photo"
                className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
            <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-light font-bold ">ACKRESPONSE</h3>
            </div>
          </a>
        </motion.div>

        {/* Third Box */}
        {/* <motion.div
          className="relative overflow-hidden bg-red-300 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="right"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            Box 3
          </div>
        </motion.div> */}
        <div className="relative overflow-hidden overflow-hidden">
          <div className="absolute top-20 right-0">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 200 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" my-10 rounded-l-xl h-[30px] bg-highlight"
            ></motion.div>
          </div>
        </div>

        {/* Fourth Box */}
        <div className=" flex ">
          <div>
            <p className="text-center text-black">
              Developed and deployed full-stack web applications.
            </p>

            <Image
              src="/myself.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-[50%] m-auto"
            />
          </div>
        </div>

        {/* Fifth Box */}
        <motion.div
          className="relative  bg-red-300 row-span-2 col-span-2 group rounded-l-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="left"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <a
            href="https://lazyfish.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/lzm.png"
                width={800}
                height={800}
                alt="Picture of the author"
                className="absolute group-hover:scale-[110%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
            <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-light font-bold ">Lazy Fish Restaurant</h3>
              <p></p>
            </div>
          </a>
        </motion.div>

        {/* Sixth Box */}
        <motion.div
          className="relative  group bg-red-300 col-span-2 rounded-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="top"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <a
            href="  https://recruitment-company.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/rm.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute group-hover:scale-[110%] group-hover:z-[2] duration-300 inset-0 top-[20%]  z-[1] rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
            <div className="absolute  z-[2]  duration-300 group-hover:left-[70%] transition-all group-hover:z-[3]  top-[50%] left-[50%] ">
              <h3 className="text-light font-bold ">Ava & Fre </h3>
            </div>
          </a>
        </motion.div>

        {/* Seventh Box */}
        <motion.div
          className="relative group  bg-red-300 col-span-4  rounded-l-xl boxes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom="right"
          variants={variants}
          style={{
            backgroundImage: 'url("/bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            href="https://gymseek.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/gymseekp.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute group-hover:scale-[110%] group-hover:z-[2] duration-300 inset-0  left-[20%] z-[1] rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
            <div className="absolute  z-[2]  duration-300 group-hover:left-[70%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-light font-bold ">Gym Seek</h3>
            </div>
          </a>
        </motion.div>

        <div className=" row-span-2  flex items-center justify-center    col-span-2 ">
          <div>
            <p className="text-center text-black">
              I worked on several projects for sartup companies.
            </p>

            <Image
              src="/mewaving.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-[60%] m-auto"
            />
          </div>
        </div>

        <div className="relative grid  gap-5  col-span-2 h-[80vh] rounded-xl ">
          <motion.div
            className="relative   group   rounded-xl boxes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="top"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            variants={variants}
          >
            <a
              href="https://enirmanhomes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/enirman.png"
                  width={500}
                  height={500}
                  alt="ackresponse website photo"
                  className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
              <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-light font-bold ">Enirman</h3>
              </div>
            </a>
          </motion.div>
          <motion.div
            className="relative  group bg-black rounded-xl boxes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom="bottom"
            variants={variants}
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a
              href="https://waatech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/waatech.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="absolute group-hover:scale-[150%] group-hover:z-[2] duration-300 inset-0  z-[1] rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-[1]"></div>
              <div className="absolute  z-[2]  duration-300 group-hover:top-[80%] transition-all group-hover:z-[3]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-light font-bold ">WaaTech</h3>
              </div>
            </a>
          </motion.div>
        </div>

        <div className=" row-span-2  flex items-center justify-center    col-span-2 ">
          <div>
            <p className="text-center    text-dark">
              I have multiple personal projects.
            </p>

            <Image
              src="/thumbsup.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className=" w-[80%] m-auto"
            />
          </div>
        </div>

        <div className="relative grid  gap-5  col-span-2    rounded-xl ">
          <div>
            <div className="grid gap-2   text-black p-5">
              <h4 className="font-bold">
                Pokhara Rentals - SAAS Rental System
              </h4>
              <p className="">
                It is a SAAS rental system where local stores can create their
                account and list their products and users can rent the products.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/GurungDev/pokharaRental-api-v2"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Backend Link
                </a>

                <a
                  href="https://github.com/GurungDev/pokharaRentalStorePanel.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Store Panel
                </a>

                <a
                  href="https://github.com/GurungDev/pokharaRentalCustomerPanel.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Customer Panel
                </a>

                <a
                  href="https://github.com/GurungDev/pokharaRentalAdminPanel.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Admin Panel
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-2   text-black p-5">
              <h4 className="font-bold">SAAS Cinema System</h4>
              <p className="">
                It is a SAAS based system for different cinema to create
                account, list their hall along with the hall seats layout and
                movies, and users can book tickets.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/GurungDev/cinema_api.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Backend Link
                </a>

                <a
                  href="https://github.com/GurungDev/cinemaAdminPanel.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Admin Panel
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-2   text-black p-5">
              <h4 className="font-bold">Restaurant management System </h4>
              <p className="">
                It is a system for restaurant owners to manage their restaurant
                i.e menu, tables, orders and QR payment.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/GurungDev/himalayan_aroma_api.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Backend Link
                </a>
                <a
                  href="  https://github.com/GurungDev/himalayan_aroma_adminPanel.git"
                  className="underline text-blue-600 hover:text-blue-400"
                >
                  Admin Panel
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-2   text-black p-5">
              <h4 className="font-bold">Trip management system </h4>
              <p className="">
                It is a system for travelers to book flight, tours, hotels, and
                guide.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-2   text-black p-5">
              <h4 className="font-bold">CI/CD Pipeline </h4>
              <p className="">
                I deployed a CI/CD pipeline on goodle cloud platform. I used
                terraform to create the cloud infrastructure and github actions
                to deploy the code to kubernetes cluster and build docker image.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid min-[1100px]:hidden app-layout">
        <div>
          <p className="text-center text-black">
            I worked on several projects for sartup companies.
          </p>

          <Image
            src="/mewaving.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" w-[60%] m-auto"
          />
        </div>
        <div className="block min-[1100px]:hidden space-y-10 px-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className=" group rounded-xl  hover:scale-105 duration-500 border   bg-zinc-800 bg-opacity-10"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="    items-center py-10  w-full  ">
                  <div className="relative h-[200px]">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-contain  "
                    />
                  </div>
                  <div className="     flex flex-col justify-center items-center p-5">
                    <h4 className="font-bold  text-center">{project.title}</h4>
                    {project.description && (
                      <p className="mt-2 text-center caption text-dark  ">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className="text-center    text-dark">
            I have multiple personal projects.
          </p>

          <Image
            src="/thumbsup.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="   m-auto"
          />
        </div>
      </div>
      <div className="relative   gap-5  col-span-2  app-layout    rounded-xl grid min-[1100px]:hidden">
        <div>
          <div className="grid gap-2   text-black p-5">
            <h4 className="font-bold">Pokhara Rentals - SAAS Rental System</h4>
            <p className="">
              It is a SAAS rental system where local stores can create their
              account and list their products and users can rent the products.
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/GurungDev/pokharaRental-api-v2"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Backend Link
              </a>

              <a
                href="https://github.com/GurungDev/pokharaRentalStorePanel.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Store Panel
              </a>

              <a
                href="https://github.com/GurungDev/pokharaRentalCustomerPanel.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Customer Panel
              </a>

              <a
                href="https://github.com/GurungDev/pokharaRentalAdminPanel.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Admin Panel
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-2   text-black p-5">
            <h4 className="font-bold">SAAS Cinema System</h4>
            <p className="">
              It is a SAAS based system for different cinema to create account,
              list their hall along with the hall seats layout and movies, and
              users can book tickets.
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/GurungDev/cinema_api.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Backend Link
              </a>

              <a
                href="https://github.com/GurungDev/cinemaAdminPanel.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Admin Panel
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-2   text-black p-5">
            <h4 className="font-bold">Restaurant management System </h4>
            <p className="">
              It is a system for restaurant owners to manage their restaurant
              i.e menu, tables, orders and QR payment.
            </p>
            <div className="flex gap-5">
              <a
                href="https://github.com/GurungDev/himalayan_aroma_api.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Backend Link
              </a>
              <a
                href="  https://github.com/GurungDev/himalayan_aroma_adminPanel.git"
                className="underline text-blue-600 hover:text-blue-400"
              >
                Admin Panel
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-2   text-black p-5">
            <h4 className="font-bold">Trip management system </h4>
            <p className="">
              It is a system for travelers to book flight, tours, hotels, and
              guide.
            </p>
          </div>
        </div>

        <div>
          <div className="grid gap-2   text-black p-5">
            <h4 className="font-bold">CI/CD Pipeline </h4>
            <p className="">
              I deployed a CI/CD pipeline on goodle cloud platform. I used
              terraform to create the cloud infrastructure and github actions to
              deploy the code to kubernetes cluster and build docker image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
