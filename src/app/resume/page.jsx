"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import { SiDotnet, SiCsharp, SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { DiDotnet } from "react-icons/di";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, spring, useScroll } from "framer-motion";
import { useRef } from "react";
import Experience from "@/components/ResumeTab/Experience";
import Education from "@/components/ResumeTab/Education";
import Skills from "@/components/ResumeTab/Skills";
import AboutMe from "@/components/ResumeTab/AboutMe";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",

  info: [
    { fieldName: "Name", fieldValue: "Mostafa Rasouli" },
    { fieldName: "Phone", fieldValue: "(+98) 935 975 0102" },
    { fieldName: "Experience", fieldValue: "20+ Years" },
    { fieldName: "Email", fieldValue: "Kasraco@Gmail.com" },
    { fieldName: "Freelancer", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "Persian, English" },
  ],
};

// Experience

const experience = {
  icon: "/assets/",
  title: "My Experience",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",

  items: [
    {
      company: "Online Course Platform.",
      position: "Full Stack Web Developer Bootcamp",
      duration: "2023",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
    {
      company: "Codecademy.",
      position: "Front-End Track",
      duration: "2022",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },

    {
      company: "Online Course.",
      position: "Programming Course",
      duration: "2020 - 2021",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },

    {
      company: "Tech Institute.",
      position: "Certified Web Developer",
      duration: "2019",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
    {
      company: "Online Course.",
      position: "Programming Course",
      duration: "2020 - 2021",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
    {
      company: "Tech Institute.",
      position: "Certified Web Developer",
      duration: "2019",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
    {
      company: "Online Course Platform.",
      position: "Full Stack Web Developer Bootcamp",
      duration: "2023",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
    {
      company: "Codecademy.",
      position: "Front-End Track",
      duration: "2022",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },

    {
      company: "Online Course.",
      position: "Programming Course",
      duration: "2020 - 2021",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },

    {
      company: "Tech Institute.",
      position: "Certified Web Developer",
      duration: "2019",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
    },
  ],
};

const eductions = {
  icon: "/assets/",
  title: "My Education",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",
  items: [
    {
      type: "Full Stack Developer",
      time: "2022 - Present",
      place: "Tech Solutions Inc.",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      type: "Front-End Developer Intern",
      time: "Summer 2021",
      place: "Web Design Studio",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      type: "Freelance",
      time: "2020 - 2021",
      place: "E-Commerce Web Developer",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      type: "Teacher Asistant",
      time: "2019 - 2021",
      place: "Tech Academy",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus qui tempore, explicabo fugiat fugit veritatis autem dolore modi neque alias.",

  skillList: [
    { icon: <SiDotnet />, Name: "DotNet" },
    { icon: <SiCsharp />, Name: "CSharp" },
    { icon: <DiDotnet />, Name: "VS Code" },
    { icon: <FaReact />, Name: "React" },
    { icon: <SiNextdotjs />, Name: "NextJs" },
    { icon: <FaHtml5 />, Name: "Html" },
    { icon: <FaJs />, Name: "Java Script" },
    { icon: <FaCss3 />, Name: "Css 3" },
    { icon: <SiTailwindcss />, Name: "Tailwind" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 font-primary">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh]  w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="resume_Container">
                <h2 className="h2">{experience.title}</h2>
                <p className="resume_description">{experience.description}</p>

                <ScrollArea className="resume_scrollArea">
                  <div className="mx-auto relative">
                    <motion.div className="resume_historyLine" />

                    <Experience exper={experience} />
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education data={eductions} />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <Skills data={skills} />
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <AboutMe data={about} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
