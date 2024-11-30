import React, { useState, useEffect } from "react";
import {
  orabiImg1,
  orabiImg2,
  orabiImg3,
  orabiImg4,
  orabiImg5,
  orabiImg6,
  orabiImg7,
  orabiImg8,
  ShofyImg1,
  ShofyImg2,
  ShofyImg3,
  ShofyImg4,
  ShofyImg5,
} from "../../assets";

const projects = [
  {
    id: 1,
    name: "E-Commarce-Orabi",
    description:
      "This project is built using Next.js and TypeScript along with several modern libraries and tools to enhance functionality and performance. It includes state management, UI components, animations, and integrations with third-party services like Stripe.",
    images: [
      orabiImg1,
      orabiImg2,
      orabiImg3,
      orabiImg4,
      orabiImg5,
      orabiImg6,
      orabiImg7,
      orabiImg8,
    ],
    ClientLiveLink: "https://projectone.com",
    ClientGitHubLink: "https://github.com/myusername/projectone",
    ServerLiveLink: "https://projectone.com",
    ServerGitHubLink: "https://github.com/myusername/projectone",
    technologies: ["Next.js", "TypeScript", "Redux", "Next Auth", "Stripe Js"],
  },
  {
    id: 2,
    name: "Ecommerce-Supper-Shop",
    description:
      "This project is built using Next.js and TypeScript along with several modern libraries and tools to enhance functionality and performance. It includes state management, UI components, animations, and integrations with third-party services like Stripe.",
    images: [ShofyImg1, ShofyImg2, ShofyImg3, ShofyImg4, ShofyImg5],
    ClientLiveLink: "https://projecttwo.com",
    ClientGitHubLink: "https://github.com/myusername/projecttwo",
    ServerLiveLink: "https://projecttwo.com",
    ServerGitHubLink: "https://github.com/myusername/projecttwo",
    technologies: ["Next.js", "TypeScript", "Redux", "Next Auth", "Stripe Js"],
  },
  {
    id: 3,
    name: "E-commerce-shofy",
    description:
      "This project is built using Next.js and TypeScript along with several modern libraries and tools to enhance functionality and performance. It includes state management, UI components, animations, and integrations with third-party services like Stripe.",
    images: [ShofyImg1, ShofyImg2, ShofyImg3, ShofyImg4, ShofyImg5],
    ClientLiveLink: "https://projectthree.com",
    ClientGitHubLink: "https://github.com/myusername/projectthree",
    technologies: ["Next.js", "TypeScript", "Redux", "Next Auth", "Stripe Js"],
  },
  {
    id: 4,
    name: "Book-store",
    description: "This project showcases my skills in React and Tailwind CSS.",
    images: [ShofyImg1, ShofyImg2, ShofyImg3, ShofyImg4, ShofyImg5],
    ClientLiveLink: "https://projectfour.com",
    ClientGitHubLink: "https://github.com/myusername/projectfour",
    technologies: ["React", "Tailwind CSS", "Redux", "Next Auth"],
  },
];

const Projects = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(projects.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map((index, projectIndex) =>
          index === projects[projectIndex].images.length - 1 ? 0 : index + 1
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <section className="py-16 text-lightText">
        <div className="container mx-auto px-4 flex flex-col gap-12 h-full">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                projectIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image Slider */}
              <div className="md:w-1/2 relative h-[300px] overflow-hidden rounded-lg border border-designColor">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full p-2 transition-opacity duration-1000 ${
                      index === currentImageIndexes[projectIndex]
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Project Details */}
              <div className="md:w-1/2 flex flex-col justify-center ">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  {project.name}
                  <a
                    href={project.ClientLiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  ></a>
                </h2>
                <p className="text-lightText mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2 py-1 rounded-md border border-s-designColor  hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.ClientLiveLink && (
                    <a
                      href={project.ClientLiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-1 text-sm hover:bg-black duration-300 bg-transparent hover:text-white border-designColor p-2 rounded-md px-2 text-center items-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.ClientGitHubLink && (
                    <a
                      href={project.ClientGitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-1 hover:bg-black duration-300 bg-transparent hover:text-white border-designColor p-2 text-sm rounded-md px-2 text-center items-center"
                    >
                      Client Github
                    </a>
                  )}
                  {project.ServerLiveLink && (
                    <a
                      href={project.ServerLiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-1 text-sm hover:bg-black duration-300 bg-transparent hover:text-white border-designColor p-2 rounded-md px-2 text-center items-center"
                    >
                      Server Demo
                    </a>
                  )}
                  {project.ServerGitHubLink && (
                    <a
                      href={project.ServerGitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-1 text-sm hover:bg-black duration-300 bg-transparent hover:text-white border-designColor p-2 rounded-md px-2 text-center items-center"
                    >
                      Server GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
