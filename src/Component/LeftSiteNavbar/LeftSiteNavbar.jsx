import { BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";

const LeftSiteNavbar = () => {
      return (
            <div className="fixed hidden md:block mt-20 px-8">
                  <ul className="space-y-6 ">
                        <div className="border border-gray-500 px-2 py-2 rounded-full hover:border hover:border-designColor hover:text-designColor duration-500 cursor-pointer">
                              <a href="https://github.com/shahin-alom82">
                                    <li><IoLogoGithub size={25} /></li>
                              </a>
                        </div>

                        <div className="border border-gray-500  px-2 py-2 rounded-full hover:border hover:border-designColor hover:text-designColor duration-500 cursor-pointer" >
                              <li><ImYoutube size={25} /> </li>

                        </div>
                        <div className="border border-gray-500  px-2 py-2 rounded-full hover:border hover:border-designColor hover:text-designColor duration-500 cursor-pointer">
                              <li><FaGoogle size={25} /></li>

                        </div>
                        <div className="border border-gray-500  px-2 py-2 rounded-full hover:border hover:border-designColor hover:text-designColor duration-500 cursor-pointer">
                              <li><FiLinkedin size={25} /></li>

                        </div>
                        <div className="border border-gray-500  px-2 py-2 rounded-full hover:border hover:border-designColor hover:text-designColor duration-500 cursor-pointer">
                              <li><BsInstagram size={25} /> </li>

                        </div>
                        <span className="w-40 md:w-60 lg:w-72 h-[1px] bg-designColor ml-3 md:ml-6"></span>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-28 bg-designColor group-hover:bg-designColor transition duration-300"></div>
                  </ul>
            </div>
      );
};

export default LeftSiteNavbar;