import React, { useEffect } from "react";
import { MdAddCall, MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";
import { logo } from "../../assets";

const Email = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div id="contact" className="text-lightText py-14 ">
      <h1
        className="text-center text-3xl md:text-4xl font-bold text-gray-300 mb-10"
        data-aos="fade-up"
      >
        Contact Form
      </h1>

      <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-2 gap-12 px-4 lg:px-8">
        {/* Left-side (Contact Info) */}
        <div
          className="flex flex-col items-center lg:items-start"
          data-aos="fade-right"
        >
          <div>
            <img
              className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover mb-6"
              src={logo}
              alt="Profile"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left text-gray-200">
            Want to work together?
          </h1>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex gap-4 items-center hover:scale-105 transition-transform">
              <div className="bg-btnColor p-4 rounded-2xl text-gray-100 shadow-md">
                <MdAddCall size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-300">Phone</h3>
                <p className="text-gray-400">+880 1910255376</p>
              </div>
            </div>

            <div className="flex gap-4 items-center hover:scale-105 transition-transform">
              <div className="bg-btnColor p-4 rounded-2xl text-gray-100 shadow-md">
                <MdOutlineMail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-300">Email</h3>
                <p className="text-gray-400">yeasinmiah1272001@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center hover:scale-105 transition-transform">
              <div className="bg-btnColor p-4 rounded-2xl text-gray-100 shadow-md">
                <IoLocationOutline size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-300">Location</h3>
                <p className="text-gray-400">Lalbag, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Contact Form) */}
        <div
          className="flex justify-center lg:justify-start"
          data-aos="fade-left"
        >
          <div className="w-full max-w-[470px]  rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">
              Contact Form
            </h2>

            <form className="flex flex-col">
              <input
                placeholder="Full Name"
                className="bg-gray-700 text-white border-0 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="text"
              />
              <input
                placeholder="Email"
                className="bg-gray-700 text-white border-0 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="email"
              />
              <input
                placeholder="Subject"
                className="bg-gray-700 text-white border-0 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                type="text"
              />

              <textarea
                placeholder="Your message"
                className="bg-gray-700 text-white border-0 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                name="feedback"
              ></textarea>

              <button
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold py-3 px-4 rounded-md mt-4 hover:shadow-lg hover:from-indigo-700 hover:to-blue-600 transition duration-200"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
