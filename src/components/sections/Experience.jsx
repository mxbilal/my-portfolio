import { useState } from "react";
import { experience } from "../../utilities/constants";
import { motion } from "framer-motion";

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <motion.section
      id="experience"
      className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[700px]"
      initial={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
        <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
          03.
        </span>
        <h2 className="text-sectionHeading">Where I've Worked</h2>
        <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px]"></div>
        <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
        <div
          role="tablist"
          aria-label="Job tabs"
          className="flex sm:flex-col overflow-x-auto sm:overflow-visible relative sm:min-w-[180px]"
        >
          {experience.map((item, idx) => (
            <button
              key={item.company}
              type="button"
              role="tab"
              aria-selected={active === idx}
              onClick={() => setActive(idx)}
              className={`font-mono text-sm text-left whitespace-nowrap px-5 py-3 border-b-2 sm:border-b-0 sm:border-l-2 transition-all duration-200 ${
                active === idx
                  ? "text-themeBlue border-themeBlue bg-themeBlue/10"
                  : "text-secondaryText border-blue-400/20 hover:bg-themeBlue/5 hover:text-themeBlue"
              }`}
            >
              {item.company.split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="sm:ml-[20px] w-full min-h-[280px]">
          <h3 className="text-xl font-fontHeading font-semibold text-primaryText mb-1">
            {job.role}{" "}
            <span className="text-themeBlue">@ {job.company}</span>
          </h3>
          <p className="font-mono text-sm text-secondaryText mb-1">
            {job.period}
          </p>
          <p className="font-mono text-xs text-secondaryText/80 mb-6">
            {job.location}
          </p>
          <ul className="list-none p-0 m-0">
            {job.points.map((point, i) => (
              <li
                key={i}
                className="relative pl-7 mb-3 text-secondaryText font-fontParagraph text-[15px] leading-relaxed"
              >
                <span className="absolute left-0 top-[2px] text-themeBlue">
                  ▹
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
