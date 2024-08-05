import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Experience = ({ exper }) => {
  const refscroolArea = useRef(null);

  return (
    <ul ref={refscroolArea} className="resume_listContainer">
      {exper.items.map((item, index) => {
        return (
          <li key={index} className="resume_listItem">
            <LiIcon refrence={refscroolArea} />
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="resume_listItemTitle">{item.position}</h3>
              <span className="resume_listItemLight">
                {item.duration} | {item.company}
              </span>
              <div>
                <span></span>
                <span>{item.description}</span>
              </div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};

export default Experience;
