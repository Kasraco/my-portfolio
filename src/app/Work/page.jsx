"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontEnd",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro placeat iure enim? Doloremque, consequuntur!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "NextJs" }],
    image: "/assets/picture.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontEnd",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro placeat iure enim? Doloremque, consequuntur!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "NextJs" }],
    image: "/assets/picture.png",
    live: "",
    github: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [key, setKey] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setKey(currentIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <motion.div
              key={key}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col gap-[30px] h-[50%]"
            >
              {/* outline num */}
              <motion.div
                variants={containerVariants}
                className="text-8xl font-primary leading-none font-extrabold text-transparent text-outline"
              >
                {project.num}
              </motion.div>
              <motion.h2 className="text-[42px] leading-none font-bold font-primary group-hover:text-linkButtonColor transition-all duration-500 capitalize ">
                {project.title} project
              </motion.h2>
              <motion.p
                variants={containerVariants}
                className="text-textColor1/60 "
              >
                {project.description}
              </motion.p>
              <motion.ul variants={containerVariants} className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      variants={containerVariants}
                      className="text-lg text-linkButtonColor  capitalize "
                    >
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </motion.li>
                  );
                })}
              </motion.ul>
              <div className="border border-borderColor/2"></div>
              {/* buttons */}
              <motion.div
                key={key + "link"}
                variants={containerVariants}
                className="flex items-center gap-4"
              >
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-linkButtonColor/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-linkButtonColor text-3xl group-hover:text-primary " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-linkButtonColor/5 flex justify-center items-center group">
                        <BsGithub className="text-linkButtonColor text-3xl group-hover:text-primary " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="xl:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/4 z-10">
                        {/* Project Title */}
                      </div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slide buttons */}
              <WorkSliderBtns
                // containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-3 z-20 w-full justify-between  xl:w-max xl:justify-none"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between  "
                btnStyles="bg-linkButtonColor/5 hover:text-primary rounded-ful text-linkButtonColor text-[22px] w-[44px] h-[44px]  flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
