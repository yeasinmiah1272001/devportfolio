import { fullstack1, fullstack2, img1, img2 } from "../../assets";
import { motion } from "framer-motion";

const Projects = () => {
  const project = [
    {
      img: fullstack1,
      title: "Orabi-Ecommerce",
      tech: [
        "React Js",
        "Stripe Js",
        "Mongoose",
        "Redux Toolkit",
        "Redux-Persist",
        "Node Js",
        "Express Js",
      ],
      ClientLiveLink: "https://github.com/yeasinmiah1272001/orabi-fullstack",
      ServerLiveLink: "https://github.com/yeasinmiah1272001/orabi-fullstack",
      ClientGithubLink: "https://github.com/yeasinmiah1272001/orabi-fullstack",
      ServerGithubLink: "https://github.com/yeasinmiah1272001/orabi-fullstack",
    },
    {
      img: fullstack2,
      title: "E-Commerce-Suppershop",
      tech: [
        "React Js",
        "Stripe Js",
        "Mongoose",
        "Redux Toolkit",
        "Redux-Persist",
        "Node Js",
        "Express Js",
      ],
      ClientLiveLink: "https://github.com/yeasinmiah1272001/mern-suppershop",
      ServerLiveLink: "https://github.com/yeasinmiah1272001/mern-suppershop",
      ClientGithubLink: "https://github.com/yeasinmiah1272001/mern-suppershop",
      ServerGithubLink: "https://github.com/yeasinmiah1272001/mern-suppershop",
    },
    {
      img: img1,
      title: "E-Commerce-Shofy",
      tech: ["Next.js", "TypeScript", "Redux", "Next Auth"],
      ClientLiveLink: "https://shofyproject.vercel.app",
      ClientGithubLink:
        "https://github.com/yeasinmiah1272001/shofy-practice-main",
    },
    {
      img: img2,
      title: "E-Commerce-Shopping",
      tech: ["Next.js", "REST API", "Redux", "Next Auth"],
      ClientLiveLink: "https://eid-shopping.vercel.app",
      ClientGithubLink: "https://github.com/yeasinmiah1272001/eid-shopping",
    },
  ];

  return (
    <div id="projects" className="px-4 md:px-10 lg:mx-20 space-y-14 lg:mt-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold text-designColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
        <p className="text-lightText text-sm">
          Explore some of my recent projects showcasing full-stack and frontend
          development.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {project.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-gradient-to-b text-lightText  border border-1 border-designColor rounded-lg"
          >
            {/* Image */}
            <div className="md:w-1/2 overflow-hidden p-3 group transition ">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover md:h-60  duration-500 rounded-md group-hover:scale-105 transition-transform "
                // initial={{ y: 0 }}
                // whileHover={{ y: -80 }}
                // transition={{ duration: 1 }}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between md:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-lightText">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-xs font-medium px-2 py-1 rounded-full border border-s-designColorbg-gray-100  hover:text-white "
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {/* Live Links */}
                {project.ClientLiveLink && (
                  <a
                    href={project.ClientLiveLink}
                    target="_blank"
                    className="text-sm text-white bg-slate-800 py-1 px-4 rounded-full hover:bg-black transition duration-300 text-center"
                  >
                    Client Live
                  </a>
                )}
                {project.ServerLiveLink && (
                  <a
                    href={project.ServerLiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-slate-800 py-1 px-4 rounded-full hover:bg-black transition duration-300 text-center"
                  >
                    Server Live
                  </a>
                )}

                {/* GitHub Links */}
                {project.ClientGithubLink && (
                  <a
                    href={project.ClientGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-designColor border border-designColor py-1 px-4 rounded-full hover:bg-designColor hover:text-white transition duration-300 text-center"
                  >
                    Client GitHub
                  </a>
                )}
                {project.ServerGithubLink && (
                  <a
                    href={project.ServerGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-designColor border border-designColor py-1 px-4 rounded-full hover:bg-designColor hover:text-white transition duration-300 text-center"
                  >
                    Server GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
