import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { motion } from "framer-motion";

const Skills = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjust this value to control the delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <div className="resume_Container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="h2">{data.title}</h2>
        <p className="resume_description">{data.description}</p>
      </motion.div>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4"
      >
        {data.skillList.map((item, index) => {
          return (
            <motion.li key={index} variants={itemVariants}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-primary/20 rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-primary transition-all duration-300">
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{item.Name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skills;
