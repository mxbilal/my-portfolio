import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const MainProjectCard = ({
  project: { title, description, tags, demo, github, image },
  idx,
  length,
}) => {
  const hasDemo = Boolean(demo);
  const hasGithub = Boolean(github);

  return (
    <motion.li
      initial={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative grid gap-[10px] grid-cols-12 items-center ${
        idx !== length - 1 ? "mb-[70px] md:mb-[100px]" : ""
      } transition-all duration-200 shadow-aboutShadow md:shadow-none`}
    >
      <div
        className={`p-[25px] pb-[20px] !col-full ${
          idx % 2 === 0
            ? "md:!col-mdScreenRev lg:!col-lgScreen md:text-right"
            : "md:!col-mdScreen lg:!col-lgContent"
        } sm:p-[40px] sm:pb-[30px]  flex flex-col justify-center h-full z-[5] md:block md:h-auto relative`}
        style={{
          gridArea: "1 / 1 / -1 / 7",
        }}
      >
        <p className="my-[10px] text-themeBlue font-mono text-sm font-semibold tracking-wider">
          Featured Project
        </p>

        <h3 className="font-bold leading-[1.1] text-sectionHeading font-fontHeading md:mb-[20px]">
          {hasDemo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accentOrange text-accentInk px-[0.28em] py-[0.05em] rounded-[3px] transition-all duration-200 hover:brightness-110"
            >
              {title}
            </a>
          ) : (
            <span className="inline-block bg-accentOrange text-accentInk px-[0.28em] py-[0.05em] rounded-[3px]">
              {title}
            </span>
          )}
        </h3>

        <div className="shadow-none md:shadow-aboutShadow transition-all duration-200 relative z-[2] py-[20px] md:p-[25px] rounded text-secondaryText text-base bg-transparent md:bg-[#112240] font-fontParagraph md:hover:shadow-bigShadow">
          <p>{description}</p>
        </div>

        <ul
          className={`flex flex-wrap ${
            idx % 2 === 0 && "md:justify-end"
          } relative z-[2] my-[10px] md:mt-[25px] md:mb-[10px] p-0 list-none`}
        >
          {tags.map((tag, i) => (
            <li
              key={i}
              className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(hasGithub || hasDemo) && (
          <div
            className={`flex items-center relative mt-[10px] ml-[10px] ${
              idx % 2 === 0 && "md:justify-end md:ml-0 md:mr-[10px]"
            } text-primaryText text-[22px]`}
          >
            {hasGithub && (
              <a
                href={github}
                className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub`}
              >
                <FiGithub />
              </a>
            )}
            {hasDemo && (
              <a
                href={demo}
                className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={`!col-full h-full opacity-25 ${
          idx % 2 === 0
            ? "md:!col-lgScreenRev"
            : "md:!col-lgScreen lg:!col-lgImage"
        } md:h-auto md:opacity-100 shadow-aboutShadow transition-all duration-200 relative`}
        style={{
          gridArea: "1 / 6 / -1 / -1",
        }}
      >
        {hasDemo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full block"
          >
            <ProjectThumb title={title} image={image} />
          </a>
        ) : (
          <div className="h-full">
            <ProjectThumb title={title} image={image} />
          </div>
        )}
      </div>
    </motion.li>
  );
};

const ProjectThumb = ({ title, image }) => (
  <div className="group w-full relative max-w-[700px] h-full">
    <div className="block relative w-full bg-themeBlue shadow-aboutShadow rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
      {image ? (
        <img
          className="w-auto md:w-full h-full min-h-[400px] bg-no-repeat rounded-lg relative object-cover transition-all duration-500 mix-blend-multiply grayscale contrast-[70%] brightness-50 md:brightness-95 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4]"
          src={image}
          alt={`${title} preview`}
        />
      ) : (
        <div className="w-full min-h-[400px] h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0a3a6b] to-themeBlue/40 mix-blend-multiply group-hover:mix-blend-normal transition-all duration-500">
          <span className="font-fontHeading font-bold text-6xl text-primaryText/90 z-[4]">
            {title.charAt(0)}
          </span>
        </div>
      )}
    </div>
  </div>
);

export default MainProjectCard;
