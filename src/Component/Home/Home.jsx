import About from "../About/About";
import Banner from "../Banner/Banner";
import Design from "../Design";
import Education from "../Education/Education";
import Email from "../Email/Email";
import Header from "../Header/Header";
import OtherSection from "../Other/Other";
import Projects from "../Projects/Projects";
import ScrollBar from "../ScrollBar/ScrollBar";
import Skils from "../Skils/Skils";

const Home = () => {
  return (
    <main className="font-fontFamily min-h-screen  text-lightText">
      <Design />
      <Header />
      <Banner />
      <About />
      <Skils />
      <Projects />
      <ScrollBar />
      <OtherSection />

      <Education />
      <Email />
    </main>
  );
};

export default Home;
