import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import { yeasin } from "../../assets";

const About = () => {
  return (
    <div>
      <Container id="about" className="py-20 lg:px-20">
        <SectionTitle titleNo={"01 ."} title={"About me"}></SectionTitle>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="lg:w-2/3 w-full">
            <h1 className="mt-5 text-[18px] text-darkText">
              I'm a Frontend Developer skilled in HTML, CSS, and React.js,
              expanding my expertise in Next.js and TypeScript. I focus on
              creating responsive, user-friendly web applications using Tailwind
              CSS. I've worked across various industries, from agencies to
              startups, delivering modern solutions.
            </h1>

            <div className="mt-10 flex flex-col lg:flex-row gap-24 text-[16px]">
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    JavaScript (ES6+)
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    React js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    JavaScript (ES6+)
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    MongoDB
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Next js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Node js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    Express js
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <FaArrowAltCircleRight className="text-designColor" />
                  <a href="" className="hover:text-lightText text-darkText">
                    TailwindCSS
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 ">
            <img
              className="lg:h-[400px] bg-white border-4 hover:bg-cyan-300 w-[300px] hover:backdrop-hue-rotate-30 duration-300 hover:border-8 hover:shadow-xl hover:shadow-designColor border-designColor rounded-full"
              src={yeasin}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
