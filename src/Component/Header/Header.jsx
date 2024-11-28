import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "../Link/Link"; // Assuming this is the correct import for social links

import { logo, yeasincv } from "../../assets";

const navLink = [
  { title: "Home", path: "home", value: "" },
  { title: "About", path: "about", delay: 0.1 },
  { title: "Skills", path: "skills", delay: 0.3 },
  { title: "Projects", path: "projects", delay: 0.4 },
  { title: "Education", path: "education", delay: 0.2 },

  { title: "Contact", path: "email", delay: 0.5 },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };

  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 lg:px-20 sticky top-0 z-50 bg-[#0A192F] opacity-100">
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-24 py-3 w-28 cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden md:inline-flex items-center gap-7">
          <div className="flex lg:text-[18px] text-xs lg:gap-7 gap-4">
            {navLink.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium hover:text-designColor cursor-pointer duration-300"
              >
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: item.delay }}
                >
                  <span className="text-designColor mr-1">
                    {item.value}
                    {item.value && "."}
                  </span>
                  <span className="uppercase tracking-wide">{item.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          {/* <h1></h1> */}
          {/* Resume Button */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={yeasincv} // Correct href for the resume download
            download="yeasin.pdf" // Sets the download name
            target="_blank" // Optional: Opens in new tab
            className="lg:px-8 lg:py-2 px-4 py-1 rounded-md font-medium text-designColor lg:text-[16px] tracking-wider uppercase border border-designColor hover:bg-hoverColor duration-200"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300" />
        </div>

        {/* Mobile Menu */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-[250px] h-screen bg-black/100 flex flex-col items-end z-30"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll bg-textBg flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-7 right-4 duration-500"
              />

              {/* Mobile Menu Links */}
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-5">
                  {navLink.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium text-darkText hover:text-designColor cursor-pointer duration-300"
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item.delay }}
                      >
                        <span className="text-designColor">
                          {item.value}
                          {item.value && "."}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>

                {/* Mobile Resume Download Button */}
                <a href={resume} download="resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-4 py-2 rounded-md font-medium text-designColor text-[13px] tracking-wider uppercase border border-designColor hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>

                {/* Social Links */}
                <SocialLinks className="flex-row items-center gap-5" />

                {/* Email */}
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  className="text-sm w-72 tracking-widest text-designColor text-center mt-4"
                  href="mailto:noor.jsdivs@gmail.com"
                >
                  <p className="text-darkText hover:text-designColor hover:underline underline-offset-4 duration-200">
                    shahinalom3511371@gmail.com
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
