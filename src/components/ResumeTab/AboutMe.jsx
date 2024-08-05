import { motion } from "framer-motion";
const AboutMe = ({ data }) => {
  return (
    <div className="resume_Container">
      <div>
        <h2 className="h2">{data.title}</h2>
        <p className="resume_description">{data.description}</p>
      </div>
      <motion.ul
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
      >
        {data.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-textColor1/60">{item.fieldName}</span>
              <span className="text-lg">{item.fieldValue}</span>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default AboutMe;
