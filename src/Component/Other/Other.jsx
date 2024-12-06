import { motion } from "framer-motion";
import { useState } from "react";
import {
  frontend1,
  frontend2,
  frontend3,
  frontend4,
  frontend5,
  frontend6,
  fullstack1,
  fullstack2,
  otherImg1,
  otherImg2,
  otherImg3,
  otherImg4,
  otherImg5,
  otherImg6,
  perler,
} from "../../assets";

// Portfolio data with categories
const portfolioData = [
  {
    id: 1,
    title: "Portfolio",
    liveLink: "https://yeasinweb.vercel.app",
    githubLink: "https://yeasinweb.vercel.app",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React.js",
      "React Scroll",
      "Framer motion",
      "tsparticles",
      "Marquee",
      "type writter",
    ],
    category: "Design",
    img: otherImg1,
  },
  {
    id: 2,
    title: "Store House",
    liveLink:
      "https://65929af45e2c05aed0fdfd40--legendary-taiyaki-a3fbb8.netlify.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "React Scroll", "Framer motion", "Deisy ui"],
    category: "Design",
    img: otherImg2,
  },
  {
    id: 3,
    title: "LandingPage",
    liveLink: "https://react-landing-page-template-93ne.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "React Scroll", "Framer motion", "Deisy ui", "emailjs"],
    category: "Design",
    img: otherImg3,
  },
  {
    id: 4,
    title: "Doctor Apponintment",
    liveLink: "https://romaletodiani.github.io/Hospital-Website/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["Next js", "React Scroll", "Framer motion", "Deisy ui", "emailjs"],
    category: "Design",
    img: otherImg4,
  },
  {
    id: 5,
    title: "Arc",
    liveLink: "https://hbsales.onrender.com/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React Js", "React Scroll", "Framer motion", "Deisy ui", "emailjs"],
    category: "Design",
    img: otherImg5,
  },
  {
    id: 6,
    title: "Portfolio2",
    liveLink: "https://yeasinportfolio.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React.js",
      "React Scroll",
      "Framer motion",
      "tsparticles",
      "Marquee",
      "type writter",
    ],
    category: "Design",
    img: otherImg6,
  },
  {
    id: 9,
    title: "Ecommarce-Shopping",
    liveLink: "https://eid-shopping.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Stript js",
      "Next Auth",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Frontend",
    img: frontend2,
  },
  {
    id: 7,
    title: "Ecommarce-Shofy",
    liveLink: "https://shofyproject.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Typescript",
      "Next Auth",
      "Stript js",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Frontend",
    img: frontend1,
  },
  {
    id: 6,
    title: "Perlour",
    liveLink: "https://parlour-blush.vercel.app/",
    githubLink: "https://github.com/yeasinmiah1272001/parlour",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Stript js",
      "Next Auth",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Frontend",
    img: perler,
  },
  {
    id: 9,
    title: "Ecommarce-Smartyt",
    liveLink: "https://e-commarce-smartyt.vercel.app",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Typescript",
      "Stript js",
      "Next Auth",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Frontend",
    img: frontend3,
  },
  {
    id: 10,
    title: "Book-Store",
    liveLink: "https://book-client-five.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React Js",
      "Stript js",
      "Firebase",
      "Mongodb",
      "Node js",
      "Express js",
    ],
    category: "Frontend",
    img: frontend4,
  },
  {
    id: 11,
    title: "Fashion-Ecommarce",
    liveLink: "https://fashion-client-iota.vercel.app",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React Js",
      "Stript js",
      "Firebase",
      "Mongodb",
      "Node js",
      "Express js",
    ],
    category: "Frontend",
    img: frontend5,
  },
  {
    id: 12,
    title: "Travel-Blog",
    liveLink: "travel-blog-eight-orpin.vercel.app",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React Js",
      "Stript js",
      "Firebase",
      "Mongodb",
      "Node js",
      "Express js",
    ],
    category: "Frontend",
    img: frontend6,
  },
  {
    id: 13,
    title: "Orabi-Ecommarce",
    liveLink: "",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React Js",
      "Stript js",
      "Mongoose",
      "Redux Tolkit",
      "Redux-Persist",
      "Node js",
      "Express js",
    ],
    category: "Full Stack",
    img: fullstack1,
  },
  {
    id: 14,
    title: "Supper-shop",
    liveLink: "",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "React Js",
      "Stript js",
      "Mongoose",
      "Redux Tolkit",
      "Redux-Persist",
      "Node js",
      "Express js",
    ],
    category: "Full Stack",
    img: fullstack2,
  },
  {
    id: 15,
    title: "Ecommarce-Shofy",
    liveLink: "https://shofyproject.vercel.app/",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Typescript",
      "Next Auth",
      "Stript js",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Full Stack",
    img: frontend1,
  },
  {
    id: 8,
    title: "Ecommarce-Shopping",
    liveLink: "eid-shopping.vercel.app",
    githubLink: "",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: [
      "Next Js",
      "Stript js",
      "Next Auth",
      "Redux Tolkit",
      "Redux Persist",
      "Framer motion",
      "Marquee",
    ],
    category: "Full Stack",
    img: frontend2,
  },
];

const OtherSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Function to filter portfolio items based on selected category
  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  // Show only 3 items by default, show all when "Show All" is clicked
  const portfolioToDisplay = showAll
    ? filteredPortfolio
    : filteredPortfolio.slice(0, 3);

  return (
    <div className="py-16">
      <h1 className="text-center text-4xl font-bold text-gray-400">
        Other Noteworthy Projects
      </h1>

      {/* Tabs */}
      <div className="hidden md:flex mx-auto items-center justify-center mt-8 gap-6">
        {["All", "Full Stack", "Frontend", "Design"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setShowAll(false); // Reset to show only 3 when category changes
            }}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all ${
              selectedCategory === category
                ? "bg-designColor text-black"
                : "text-lightText border border-designColor"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Portfolio items */}
      <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioToDisplay.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col w-full border p-5 shadow-2xl rounded-lg transition duration-500 h-full"
          >
            <div className="overflow-hidden  rounded-t-lg h-60 group">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover object-top rounded-t-2xl hover:scale-95"
                initial={{ y: 0 }}
                whileHover={{ y: -80 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="flex-grow mt-4">
              <h3 className="text-sm font-bold text-white mb-2">
                {project.title}
              </h3>
              <ul className="flex text-start flex-wrap text-xs font-medium">
                {project.tech.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-opacity-45 px-2 py-1 border border-gray-300 bg-transparent hover:bg-black  rounded-md m-1 transition-transform transform hover:scale-110 hover:text-designColor"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="text-white text-sm border border-gray-400 rounded-full px-3 py-1 hover:bg-slate-900 transition duration-300 bg-btnColor"
                  whileHover={{ scale: 1.1 }}
                >
                  Live Link
                </motion.button>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="text-white border text-sm border-gray-400 bg-btnColor rounded-full px-6 py-1 hover:bg-slate-900 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  GitHub
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && filteredPortfolio.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-btnColor text-white border border-1 border-designColor rounded-lg text-lg font-semibold"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default OtherSection;
