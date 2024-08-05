import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Skills = ({ data }) => {
  return (
    <div className="resume_Container">
      <div>
        <h2 className="h2">{data.title}</h2>
        <p className="resume_description">{data.description}</p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
        {data.skillList.map((item, index) => {
          return (
            <li key={index}>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
