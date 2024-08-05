"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const clickNext = () => {
    activeImageIndex === projects.length - 1
      ? setactiveImageIndex(0)
      : setactiveImageIndex(activeImageIndex + 1);
  };

  const clickPrev = () => {
    activeImageIndex === 0
      ? setactiveImageIndex(projects.length - 1)
      : setactiveImageIndex(activeImageIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
          <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
            {projects.map((proj, index) => {
              return (
                <div
                  className={`${
                    index === activeImageIndex
                      ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                      : "hidden"
                  }`}
                  key={index}
                >
                  <Image
                    src={proj.image}
                    width={400}
                    height={400}
                    alt=""
                    className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Description */}
          <div className="grid place-items-start w-full relative rounded-tr-3xl rounded-br-3xl">
            <div className="uppercase text-sm absolute right-4 top-2 underline-offset-2 underline">
              {projects.map((proj, index) => {
                return (
                  <div
                    className={
                      index === activeImageIndex
                        ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
                        : "hidden"
                    }
                    key={index}
                  >
                    <div className="py-16 text-5xl font-extrabold">
                      {proj.title}
                    </div>
                    <div className="leading-relaxed font-medium text-base tracking-wide h-40 text-textColor1/60">
                      {proj.description}
                    </div>
                    <button className="border-t-linkButtonColor text-textColor1 uppercase px-4 py-2 rounded-md my-10">
                      Demo
                    </button>
                    <div className="absolute bottom-1 w-full flex justify-center items-center">
                      <div
                        onClick={clickNext}
                        className="absolute right-20 bottom-2 cursor-pointer"
                      >
                        Next
                      </div>
                      <div
                        onClick={clickPrev}
                        className="absolute right-2 bottom-2 cursor-pointe"
                      >
                        Before
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
