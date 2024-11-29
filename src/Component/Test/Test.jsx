import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaDocker,
  FaAws,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaGit,
  FaGoogle,
  FaLinux,
} from "react-icons/fa";

const Test = () => {
  const icons = [
    <FaReact />,
    <FaNodeJs />,
    <FaDatabase />,
    <FaGithub />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaJsSquare />,
    <FaPython />,
    <FaLaravel />,
    <FaVuejs />,
    <FaAngular />,
    <FaDocker />,
    <FaAws />,
    <FaPhp />,
    <FaJava />,
    <FaGitAlt />,
    <FaFigma />,
    <FaGit />,
    <FaGoogle />,
    <FaLinux />,
  ];

  return (
    <div className="flex justify-center items-center min-h-screen text-white px-4 md:px-10 lg:px-20 space-y-6">
      <div className="flex flex-wrap justify-around mx-auto items-center w-full max-w-7xl">
        {/* Left side - Circle of icons */}
        <div className="relative hidden md:inline-flex w-48 h-48 sm:w-36 sm:h-36 lg:w-96 lg:h-96 mr-12 mb-8 sm:mb-0">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="w-full h-full flex justify-center items-center relative">
              <div className="w-36 h-36 sm:w-28 sm:h-28 lg:w-80 lg:h-80 relative flex justify-center items-center">
                {icons.map((Icon, index) => {
                  const angle = (index / icons.length) * 360;
                  const transformStyle = {
                    transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                  };
                  return (
                    <div
                      key={index}
                      className="absolute hover:scale-110 transition-transform duration-1000 ease-out"
                      style={transformStyle}
                    >
                      <div className="text-3xl sm:text-2xl lg:text-5xl text-blue-500">
                        {Icon}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Relevant Text */}
        <div className="flex flex-col justify-center items-start text-left max-w-xl space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-yellow-400 mb-4">
            Technologies I Use
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            I have experience working with a variety of technologies, including:
          </p>
          <ul className="space-y-2 text-lg text-gray-400">
            <li>
              <strong className="text-blue-500">Frontend:</strong> React,
              Typescript, HTML, CSS, JavaScript
            </li>
            <li>
              <strong className="text-blue-500">Backend:</strong> Node.js,
              Express, MongoDB, SQL
            </li>
            <li>
              <strong className="text-blue-500">Tools:</strong> Git, Figma, VS
              Code, Vercel
            </li>
            <li>
              <strong className="text-blue-500">Languages:</strong> JavaScript,
              Python, Java
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test;
