import Container from "../Container/Container";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import LeftSiteNavbar from "../LeftSiteNavbar/LeftSiteNavbar";
import RightSiteNabvar from "../RightSiteNabvar/RightSiteNabvar";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const reviewVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const stringValue = ["I build Things for wait", "Fontend Developer"];

  return (
    <div>
      <LeftSiteNavbar></LeftSiteNavbar>
      <Container
        id="home"
        className="py-10 md:py-20 flex flex-col gap-4 lg:gap-4 lg:px-20"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {/* <h1 className="text-2xl">{moment().format('MMMM D , YYYY / h:mm A')}</h1> */}
          <h1 className="lg:text-2xl text-[18px] font-bodyFont text-designColor mt-2">
            Hi, My Name is
          </h1>

          <h1 className="lg:text-6xl text-3xl font-bold mt-5 uppercase">
            Yeasin Miah
          </h1>
          <div className="lg:text-6xl text-3xl font-semibold text-designColor mt-5">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: "|",
                strings: stringValue,
              }}
            />
          </div>
          <p className="text-[18px] text-darkText mt-5 md:max-w-[850px]">
            I am a web developer with 1+ years of experience in React. I have a
            strong foundation <br /> in front-end & back-end development,
            skilled in creating user-friendly and responsive <br /> web
            applications using React and its ecosystem.
          </p>
          <button className="text-[16px] h-12 lg:w-[200px] w-52 border-2 hover:bg-hovarColor duration-500 border-designColor p-2 mt-8 rounded-lg text-designColor">
            Click out my Projects!
          </button>
        </motion.div>

        <div className="text-cyan-300 text-center rounded-lg w-full">
          <Marquee gradient={false}>
            <div className="lg:text-[18px] cursor-pointer mt-3">
              <ul>
                {[
                  "HTML-CSS",
                  "JavaScript",
                  "React",
                  "TailwindCSS",
                  "Bootstrap",
                  "MaterialUI",
                  "NodeJS",
                  "ExpressJS",
                  "MongoDB",
                  "Firebase",
                  "Vercel",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="inline-block px-6 py-2 mx-4 my-2 border-2 border-designColor rounded-lg text-text-1 font-medium hover:text-designColor transition-colors duration-500"
                    variants={reviewVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Marquee>
        </div>
      </Container>

      <RightSiteNabvar></RightSiteNabvar>
    </div>
  );
};

export default Banner;
