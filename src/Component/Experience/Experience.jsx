import { useState } from "react";
import Container from "../Container/Container";
import WorkCart from "../WorkCart/WorkCart";
import SectionTitle from "../SectionTitle/SectionTitle";

const Experience = () => {

      const [workReactBd, seWorkReactBD] = useState(true);
      const [workGoogle, setWorkGoogle] = useState(false);
      const [workApple, setWorkApple] = useState(false);
      const [workSplash, setWorkSplash] = useState(false);
      const [workAmazon, setWorkAmazon] = useState(false);

      const handleReactBd = () => {
            seWorkReactBD(true)
            setWorkGoogle(false)
            setWorkApple(false)
            setWorkSplash(false)
            setWorkAmazon(false)
      }
      const handleGoogle = () => {
            seWorkReactBD(false)
            setWorkGoogle(true)
            setWorkApple(false)
            setWorkSplash(false)
            setWorkAmazon(false)
      }
      const handleApple = () => {
            seWorkReactBD(false)
            setWorkGoogle(false)
            setWorkApple(true)
            setWorkSplash(false)
            setWorkAmazon(false)
      }
      const handleSplash = () => {
            seWorkReactBD(false)
            setWorkGoogle(false)
            setWorkApple(false)
            setWorkSplash(true)
            setWorkAmazon(false)
      }
      const handleAmazon = () => {
            seWorkReactBD(false)
            setWorkGoogle(false)
            setWorkApple(false)
            setWorkSplash(false)
            setWorkAmazon(true)
      }

      return (

            <Container id={"experience"}  className="lg:max-w-3xl md:px-32 py-10 lg:py-32 gap-16 items-center">
                  <SectionTitle titleNo={"02 ."} title={"Where I have worked"}/>
                  <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                        <ul className="md:w-32 flex flex-col">

                              <li onClick={handleReactBd} className={`${workReactBd
                                    ? "border-l-designColor text-designColor"
                                    : "border-l-hovarColor text-darkText"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[14px] cursor-pointer duration-300 px-4`}>ReactBD
                              </li>

                              <li onClick={handleGoogle} className={`${workGoogle
                                    ? "border-l-designColor text-designColor"
                                    : "border-l-hovarColor text-darkText"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[14px] cursor-pointer duration-300 px-4`}>Google
                              </li>

                              <li onClick={handleApple} className={`${workApple
                                    ? "border-l-designColor text-designColor"
                                    : "border-l-hovarColor text-darkText"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[14px] cursor-pointer duration-300 px-4`}>Apple
                              </li>

                              <li onClick={handleSplash} className={`${workSplash
                                    ? "border-l-designColor text-designColor"
                                    : "border-l-hovarColor text-darkText"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[14px] cursor-pointer duration-300 px-4`}>Splash
                              </li>

                              <li onClick={handleAmazon} className={`${workAmazon
                                    ? "border-l-designColor text-designColor"
                                    : "border-l-hovarColor text-darkText"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[14px] cursor-pointer duration-300 px-4`}>Amazon
                              </li>
                        </ul>

                        {workReactBd && <WorkCart
                              jobTitle="Engineer"
                              jobTag="@ReactBD"
                              date="jan 2023 - present"
                              detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
                              detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
                              detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
                        >


                        </WorkCart>}


                        {workGoogle && <WorkCart

                              jobTitle="Engineer"
                              jobTag="@Google.inc"
                              date="Jan 2022 - Dec 2023"
                              detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
                              detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
                              detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"

                        ></WorkCart>}


                        {workApple && <WorkCart
                              jobTitle="Engineer"
                              jobTag="@Apple"
                              date="Jan 2021 - Dec 2021"
                              detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
                              detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
                              detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
                        ></WorkCart>}


                        {workSplash && <WorkCart
                              jobTitle="Engineer"
                              jobTag="@Splash"
                              date="Jan 2021 - Dec 2021"
                              detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
                              detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
                              detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
                        ></WorkCart>}


                        {workAmazon && <WorkCart
                              jobTitle="Engineer"
                              jobTag="@Amazon"
                              date="Jan 2020 - Dec 2020"
                              detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
                              detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
                              detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
                        ></WorkCart>}
                  </div>
            </Container>

      );
};

export default Experience;