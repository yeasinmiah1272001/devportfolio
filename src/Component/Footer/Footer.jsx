import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Container from '../Container/Container';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Fotter = () => {
      return (
            <Container className={"lg:gap-4 lg:px-20"}>
                  <footer className="mt-20 flex flex-col lg:flex-row items-center justify-between py-10 border-t border-cyan-300 ">
                        <span className="lg:text-[14px] text-[13px] text-darkText" >© 2024 <a>Your Name™</a>. All Rights Reserved.</span>
                        <div className='flex items-center gap-4 lg:mt-0 mt-6'>
                              <a href="https://github.com/shahin-alom82" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaGithub size={15} /></a>
                              <a href="https://www.facebook.com/mdshahinalom.mdshahinalom.92" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaFacebook size={15} /></a>
                              <a href="https://www.linkedin.com/in/md-shahin-alom-004797328/" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaLinkedin size={15} /></a>
                              <a href="https://www.instagram.com/sa3511371/" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaInstagramSquare size={15} /></a>
                              <a href="https://x.com/ShahinAlom60364" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaSquareXTwitter size={15} /></a>
                              <a href="https://www.youtube.com/" className='text-darkText border border-darkText py-1.5 px-1.5 rounded-full'><FaYoutube size={15} /></a>
                        </div>

                  </footer>
            </Container>
      );
};

export default Fotter;