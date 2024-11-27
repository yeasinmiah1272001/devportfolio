import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollBar = () => {

      const [scrollButton, setScrollButton] = useState(false)


      const scrollBar = () =>{
            if(window.scrollY > 60){
                  setScrollButton(true)
            }
            else{
                  setScrollButton(false)

            }
      }

      const scrollTop = () =>{
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
      }

      useEffect(() =>{
            window.addEventListener("scroll", scrollBar)
            return () =>{
                  window.removeEventListener("scroll", scrollBar)
            }
      })

      return (
            <div className="fixed bottom-4 right-4">
            {scrollButton && (
              <button
                onClick={scrollTop}
                className="p-3 bg-cyan-800 border-4 border-designColor text-white rounded-full shadow-lg hover:bg-black/30  transition duration-300"
              >
                <FaArrowCircleUp size={30} />
              </button>
            )}
          </div>
      );
};

export default ScrollBar;