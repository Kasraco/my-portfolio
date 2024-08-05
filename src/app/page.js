"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: "easeIn" },
      }}
      className="h-full xl:pl-6 lg:pl-10"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb:24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">.Net Development</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />
              <span className="text-highlight uppercase">Mostafa Rasouli</span>
            </h1>
            <p className="max-w-[700px] mb-9 text-textColor1/80">
              I excel at crafting elegant digital experiences, leveraging my
              expertise in web and desktop application development. Proficient
              in technologies such as Asp.Net Core, React.js, Next.js, Tailwind
              CSS, and MSSQL, I bring over 20 years of programming experience to
              the table. Security is paramount in all my projects, ensuring
              robust, safeguarded solutions
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 mb-5 xl:mb-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containserStyle="flex gap-6 "
                  iconStyles="w-9 h-9 border border-linkButtonColor rounded-full flex justify-center items-center text-linkButtonColor text-base hover:bg-linkButtonColor hover:text-bacgroundColor hover:transaction-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
};

export default Home;
