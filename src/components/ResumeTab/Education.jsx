import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Education = ({ data }) => {
  return (
    <div className="resume_Container">
      <h2 className="h2">{data.title}</h2>
      <p className="resume_description">{data.description}</p>

      <ScrollArea className="resume_scrollArea">
        <div className="mx-auto relative">
          <div className="resume_historyLine" />
          <EducationDetails educationList={data.items} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Education;

const EducationDetails = ({ educationList }) => {
  return (
    <ul className="resume_listContainer">
      {educationList.map((item, index) => {
        return (
          <li key={index} className="resume_listItem">
            <LiIcon />
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="resume_listItemTitle">{item.type}</h3>
              <span className="resume_listItemLight">
                {item.time} | {item.place}
              </span>
              <div>
                <span></span>
                <span>{item.info}</span>
              </div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};
