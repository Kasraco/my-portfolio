"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    Title: "Web Development",
    Description:
      "Web Application Development with ASP.NET Core, Frontend Design, E-Commerce Development.",
    href: "",
  },
  {
    num: "02",
    Title: "Desktop Development",
    Description:
      "Desktop Applications with WPF and WinForms, Business Process Automation.",
    href: "",
  },
  {
    num: "03",
    Title: "Database",
    Description:
      " MSSQL Database Management and Optimization,SQL Query Development and Optimization.",
    href: "",
  },
  {
    num: "04",
    Title: "Consulting and Training",
    Description: "Software Architecture Consulting, Training and Workshops.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-10">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex flex-row justify-between items-center ">
                  <div className="text-4xl font-extrabold font-primary text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[50px] h-[50px] rounded-full border border-primary  group-hover:bg-linkButtonColor transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary group-hover:text-bacgroundColor text-3xl" />
                  </Link>
                </div>
                <p className="text-4xl font-primary font-bold leading-none group-hover:text-linkButtonColor transition-all duration-500">
                  {item.Title}
                </p>
                <p className="text-textColor1/60">{item.Description}</p>
                <div className="border-b border-borderColor/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
