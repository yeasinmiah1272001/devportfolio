import { SiNextdotjs } from "react-icons/si";
import Container from "../Container/Container";
const Skils = () => {
  return (
    <Container id={"skills"} className={"lg:px-0 md:px-32 "}>
      <div className="mx-[55px] lg:ml-[70px]">
        <div className="text-center space-y-3">
          <h1 className="lg:text-4xl text-3xl font-bold">My Skils</h1>
          <p className="text-xl text-darkText">
            We put your ideas and thus your wishes in the form of a unique web
            project
            <br />
            that inspires you and you customers.
          </p>
        </div>

        {/* Cart Section */}
        <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 space-y-12 gap-7 lg:ml-8 mt-4">
          <article className="  border-white lg:w-48 lg:h-40 rounded-xl mt-12 relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-12 text-center mx-auto text-white mt-4"
                src={
                  "https://i.ibb.co/PwmZnBT/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-3 font-bold text-designColor">
                    90%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-2 font-semibold">
                    HTML 5
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <h1 className="h-12 text-center mx-auto text-green-600 mt-4 text-3xl font-bold">
                CSS
              </h1>
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-2 font-bold text-designColor">
                    90%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-3 font-semibold">
                    CSS
                  </h5>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-10 text-center mx-auto text-white mt-4"
                src={
                  "https://i.ibb.co/rGXdmzB/png-transparent-tailwind-css-hd-logo-removebg-preview.png"
                }
                alt=""
              />
              <div className="">
                <h2 className="lg:text-[20px] lg:mt-5 mt-3 font-bold text-designColor">
                  85%
                </h2>
                <h5 className="lg:text-[18px] text-center tracking-tight text-darkText lg:mt-3 mt-3 font-semibold">
                  Tailwind CSS
                </h5>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-10 text-center mx-auto text-white mt-4"
                src={
                  "https://i.ibb.co/JctpNBC/javascript-logo-number-angularjs-node-javascript-logo-11563241338go76tq0nxz-removebg-preview.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-3 font-bold text-designColor">
                    90%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-3 font-semibold">
                    Java Script
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-14 text-center mx-auto text-white mt-4"
                src={
                  "https://i.ibb.co/BrTGZ0h/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail-removebg-preview.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-2 font-bold text-designColor">
                    85%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-1 font-semibold">
                    React js
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>
          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <SiNextdotjs className="text-center items-center justify-center mx-auto text-6xl mt-2" />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-3 font-bold text-designColor">
                    50%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-2 font-semibold">
                    Next js
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-14 text-center mx-auto text-white mt-2"
                src={
                  "https://i.ibb.co/x2BXXGk/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3-removebg-preview.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] lg:mt-2 mt-4 font-bold text-designColor">
                    50%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText lg:mt-2 font-semibold">
                    Mongo DB
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-14 text-center mx-auto text-white mt-2"
                src={
                  "https://i.ibb.co/d2QNS7z/gratis-png-el-logotipo-de-node-js-el-software-informatico-express-js-de-la-aplicacion-web-node-js-ja.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-2 font-bold text-designColor">
                    50%
                  </h2>

                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-2 font-semibold">
                    Node js
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <h1 className="h-12 text-center mx-auto text-white mt-2 text-5xl font-bold">
                ex
              </h1>
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-2 font-bold text-designColor">
                    50%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-2 font-semibold">
                    Express js
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>

          <article className="border-white lg:w-48 lg:h-40 rounded-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat hover:rotate-[5deg] duration-500 cursor-pointer">
            <div className=" bg-[#112240] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  lg:w-48 lg:h-40 shadow dark:bg-gray-800 ">
              <img
                className="h-12 text-center mx-auto text-white mt-4"
                src={
                  "https://i.ibb.co/ZJcrCTG/48965da2c75390e8c486058c282b35cd-removebg-preview.png"
                }
                alt=""
              />
              <div className="">
                <a href="#">
                  <h2 className="lg:text-[20px] mt-3 font-bold text-designColor">
                    85%
                  </h2>
                  <h5 className="lg:text-[18px] text-center tracking-tight text-darkText mt-2 font-semibold">
                    Firebase
                  </h5>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden duration-500 bg-fixed opacity-0 transition ease-in-out"></div>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default Skils;
