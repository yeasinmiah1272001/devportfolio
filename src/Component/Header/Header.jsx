import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "../Link/Link";

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

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <div className="h-20 sticky top-0 z-50 w-full  shadow-lg overflow-hidden shadow-designColor/10 px-4 lg:px-20  bg-[#0A192F]">
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-12 w-12 cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <div className="flex lg:text-[18px] text-sm lg:gap-7 gap-4">
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
                    {item.value && "."}
                  </span>
                  <span className="uppercase tracking-wide">{item.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={yeasincv}
            download="Yeasin_Miah_Resume.pdf"
            className="lg:px-8 lg:py-2 px-4 py-1 rounded-md font-medium text-designColor lg:text-[16px] tracking-wider uppercase border border-designColor hover:bg-hoverColor duration-200"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-8 h-6 flex flex-col justify-between items-center cursor-pointer group">
          <span className="w-full h-[2px] bg-designColor transition-transform duration-300" />
          <span className="w-full h-[2px] bg-designColor transition-transform duration-300" />
          <span className="w-full h-[2px] bg-designColor transition-transform duration-300" />
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="absolute top-0  left-0 w-full h-screen bg-black/80 flex justify-end z-50">
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-[75%] md:w-[250px] h-full bg-[#0A192F] flex flex-col items-center py-6 relative"
              ref={ref}
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-500 absolute top-4 right-4 cursor-pointer"
              />
              <ul className="flex flex-col gap-5 text-sm mt-10">
                {navLink.map((item) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setShow(false)}
                    className="font-medium text-darkText hover:text-designColor cursor-pointer duration-300"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: item.delay }}
                    >
                      <span className="text-designColor">
                        {item.value && "."}
                      </span>
                      <span className="uppercase">{item.title}</span>
                    </motion.li>
                  </Link>
                ))}
              </ul>
              <a
                href={yeasincv}
                download="Yeasin_Miah_Resume.pdf"
                className="mt-6 px-4 py-2 rounded-md font-medium text-designColor text-sm uppercase border border-designColor hover:bg-hoverColor duration-300"
              >
                Resume
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
