import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
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
  supershop1,
  supershop10,
  supershop11,
  supershop12,
  supershop2,
  supershop3,
  supershop4,
  supershop5,
  supershop6,
  supershop7,
  supershop8,
  supershop9,
  tree1,
  tree10,
  tree11,
  tree2,
  tree3,
  tree4,
  tree5,
  tree6,
  tree7,
  tree8,
  tree9,
} from "../../assets";

const projects = [
  {
    id: 1,
    name: "Amazon Tree Plantish",
    description:
      "Discover Amazon Tree Plantish, a modern e-commerce platform built with Next.js 15,Typescript, Redux Toolkit, NextAuth, Framer Motion, React Marquee, and Stripe for seamless payments. Perfect blend of functionality and stunning UI!",
    images: [
      tree1,
      tree2,
      tree3,
      tree4,
      tree5,
      tree6,
      tree7,
      tree8,
      tree9,
      tree10,
      tree11,
    ],
    ClientLiveLink: "https://tree-plantation.vercel.app",
    ClientGitHubLink: "https://github.com/yeasinmiah1272001/Tree-Plantation",
    technologies: ["Next.js", "TypeScript", "Redux", "Next Auth", "Stripe Js"],
  },

  {
    id: 2,
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
    ClientLiveLink: "https://orebishopping.vercel.app/",
    ClientGitHubLink: "https://github.com/yeasinmiah1272001/orabi-client",
    ServerLiveLink: "https://orebishopping.vercel.app",
    ServerGitHubLink: "https://github.com/yeasinmiah1272001/orabi-server",
    technologies: [
      "React.Js",
      "Mongoose",
      "Express Js",
      "Node Js",
      "Redux",
      "Stripe Js",
      "Marquee",
      "Pie Chart",
    ],
  },
  {
    id: 4,
    name: "E-commerce-shofy",
    description:
      "This project is built using Next.js and TypeScript along with several modern libraries and tools to enhance functionality and performance. It includes state management, UI components, animations, and integrations with third-party services like Stripe.",
    images: [ShofyImg1, ShofyImg2, ShofyImg3, ShofyImg4, ShofyImg5],
    ClientLiveLink: "https://shofyproject.vercel.app/",
    ClientGitHubLink:
      "https://github.com/yeasinmiah1272001/shofy-practice-main",
    technologies: ["Next.js", "TypeScript", "Redux", "Next Auth", "Stripe Js"],
  },

  {
    id: 3,
    name: "Ecommerce-Supper-Shop",
    description:
      "This project is built using Next.js and TypeScript along with several modern libraries and tools to enhance functionality and performance. It includes state management, UI components, animations, and integrations with third-party services like Stripe.",
    images: [
      supershop2,
      supershop3,
      supershop1,
      supershop4,
      supershop5,
      supershop6,
      supershop7,
      supershop8,
      supershop9,
      supershop10,
      supershop11,
      supershop12,
    ],
    ClientLiveLink:
      "https://github.com/yeasinmiah1272001/mern-suppershop/tree/main/client",
    ClientGitHubLink:
      "https://github.com/yeasinmiah1272001/mern-suppershop/tree/main/server",
    ServerGitHubLink:
      "https://github.com/yeasinmiah1272001/mern-suppershop/tree/main/server",
    technologies: [
      "React.Js",
      "Mongoose",
      "Express Js",
      "Node Js",
      "Redux",
      "Stripe Js",
      "Marquee",
      "Pie Chart",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-5 lg:mx-28  bg-[#0A192F]">
      <div className="container mx-auto ">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-designColor">My Projects</h1>
          <p className="text-lightText mt-2 text-sm">
            Explore some of my recent work showcasing various technologies and
            designs.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-16">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                projectIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center shadow-md p-6 rounded-lg bg-[#112240] hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image Slider */}
              <div className="w-full lg:w-1/2 relative h-[260px] overflow-hidden rounded-lg border border-designColor">
                <Slider
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                >
                  {project.images.map((image, index) => (
                    <div className="" key={index}>
                      <img
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-[260px] lg:h-[300px] lg:p-3 p-4 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-designColor mb-4">
                  {project.name}
                </h2>
                <p className="text-lightText mb-6 text-sm lg:text-base leading-relaxed">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 rounded-md border border-designColor text-lightText hover:bg-designColor hover:text-white transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.ClientLiveLink && (
                    <a
                      href={project.ClientLiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md font-medium text-sm bg-transparent border border-designColor hover:bg-designColor hover:text-white transition duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.ClientGitHubLink && (
                    <a
                      href={project.ClientGitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md font-medium text-sm bg-transparent border border-designColor hover:bg-designColor hover:text-white transition duration-200"
                    >
                      Client GitHub
                    </a>
                  )}
                  {project.ServerLiveLink && (
                    <a
                      href={project.ServerLiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md font-medium text-sm bg-transparent border border-designColor hover:bg-designColor hover:text-white transition duration-200"
                    >
                      Server Demo
                    </a>
                  )}
                  {project.ServerGitHubLink && (
                    <a
                      href={project.ServerGitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md font-medium text-sm bg-transparent border border-designColor hover:bg-designColor hover:text-white transition duration-200"
                    >
                      Server GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
