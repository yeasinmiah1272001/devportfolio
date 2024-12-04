import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Container from "../Container/Container";
import { FaSquareXTwitter } from "react-icons/fa6";

const Fotter = () => {
  return (
    <Container className={"lg:gap-4 lg:px-20"}>
      <footer className="mt-20 flex flex-col lg:flex-row items-center justify-between py-10 border-t border-cyan-300 ">
        <span className="lg:text-[14px] text-[13px] text-darkText">
          © 2024 <a>Your Name™</a>. All Rights Reserved.
        </span>
        <div className="flex items-center gap-4 lg:mt-0 mt-6">
          <a
            href="https://github.com/yeasinmiah1272001"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.facebook.com/ysm.yasin.5"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaFacebook size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaInstagramSquare size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaSquareXTwitter size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
            className="text-darkText border border-darkText py-1.5 px-1.5 rounded-full"
          >
            <FaYoutube size={15} />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Fotter;
