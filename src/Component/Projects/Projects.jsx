import { img1, img2, img3, img4 } from "../../assets";
import { motion } from "framer-motion";
const Projects = () => {
  const project = [
    {
      img: img1,
      title: "E-Commerce-Shofy",
      tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
      liveLink: "https://shofyproject.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/shofy-practice-main",
    },
    {
      img: img2,
      title: "E-Commerce-Shopping",
      tech: ["Next.js", "REST API", "Redux", "Next Auth"],
      liveLink: "https://eid-shopping.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/eid-shopping",
    },
    {
      img: img3,
      title: "E-Commerce-Smartyt",
      tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
      liveLink: "https://e-commarce-smartyt.vercel.app",
      githubLink: "https://github.com/yeasinmiah1272001/e-commarceSmartyt",
    },
    {
      img: img4,
      title: "Book Store",
      tech: ["React.js", "MongoDB", "Firebase", "Express"],
      liveLink: "https://book-client-five.vercel.app/",
      githubLink:
        "https://github.com/yeasinmiah1272001/backend/tree/main/Book-store",
    },
  ];

  return (
    <div id="projects" className=" text-lg md:px-10 px-4 space-y-6 lg:mx-20">
      <div className="w-full mx-auto">
        <div className="text-center my-10 space-y-2">
          <motion.h1 className="text-4xl">My Projects</motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-full border border-designColor p-5 shadow-2xl rounded-lg transition duration-500 h-full"
            >
              <div className="overflow-hidden  rounded-t-lg h-60 group">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover object-top rounded-t-2xl hover:scale-95"
                  initial={{ y: 0 }}
                  whileHover={{ y: -80 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="flex-grow mt-4">
                <h3 className="text-sm font-bold text-lightText mb-2">
                  {project.title}
                </h3>
                <ul className="flex text-start flex-wrap text-xs font-medium">
                  {project.tech.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="bg-opacity-45 px-2 py-1 border border-gray-300 bg-transparent hover:bg-black hover:text-white rounded-md m-1 transition-transform transform hover:scale-110 hover:text-designColor"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="text-white text-sm border border-designColor rounded-full px-3 py-1 hover:bg-slate-900 transition duration-300 bg-btnColor"
                    whileHover={{ scale: 1.1 }}
                  >
                    Live Link
                  </motion.button>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="text-white border text-sm border-designColor bg-btnColor rounded-full px-6 py-1 hover:bg-slate-900 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    GitHub
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
