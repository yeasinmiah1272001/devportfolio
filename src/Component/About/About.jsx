import { FaCode } from "react-icons/fa";

import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import { yeasin } from "../../assets";
import AnimatedBorder from "../AnimatedBorder/AnimatedBorder";

const About = () => {
  return (
    <div>
      <Container id="about" className=" lg:px-20">
        <SectionTitle title={"About me"} />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20">
          {/* Left Side - Text and Skills */}
          <div className="lg:w-2/3 w-full">
            <h1 className="mt-5 text-[18px] text-darkText">
              I'm a Frontend Developer skilled in HTML, CSS, and React.js,
              expanding my expertise in Next.js and TypeScript. I focus on
              creating responsive, user-friendly web applications using Tailwind
              CSS. I've worked across various industries, from agencies to
              startups, delivering modern solutions.
            </h1>

            <div className="mt-10 flex flex-row  lg:flex-row gap-24 text-[16px]">
              {/* Left List - Skills */}
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    JavaScript (ES6+)
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    React.js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    MongoDB
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    TailwindCSS
                  </a>
                </div>
              </div>

              {/* Right List - More Skills */}
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Next.js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Node.js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Express.js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCode className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Firebase
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated Border */}
          <div className="mt-10 lg:mt-0 w-full lg:w-1/3">
            <AnimatedBorder />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
