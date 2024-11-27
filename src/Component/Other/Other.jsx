import { motion } from "framer-motion";
import { img1, img2, img3, img4 } from "../../assets";
import { useState } from "react";

// Portfolio data with categories
const portfolioData = [
  {
    id: 1,
    title: "Todo",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["Next js", "Redux"],
    link: "https://todo-form-ten.vercel.app",
    category: "Frontend",
    img: img1,
  },
  {
    id: 2,
    title: "Car-Doctor",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
    link: "https://car-doctor-practice-9032d.web.app/",
    category: "Frontend",
    img: img2,
  },
  {
    id: 3,
    title: "Job-Portal",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
    link: "https://vast-science.surge.sh/",
    category: "Full Stack",
    img: img3,
  },
  {
    id: 4,
    title: "Doctor-Appointment",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
    link: "https://medisure-healthcare.web.app/",
    category: "Full Stack",
    img: img4,
  },
  {
    id: 5,
    title: "Travel-Agency",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
    link: "https://festive-vacation.surge.sh/",
    category: "Design",
    img: img4,
  },
  {
    id: 6,
    title: "Match-Box",
    description:
      "With supporting text below as a natural lead-in to additional content.",
    tech: ["React.js", "Mongodb", "Node.js", "Firebase"],
    link: "https://thundering-competition.surge.sh/",
    category: "Design",
    img: img4,
  },
  // Add more projects as needed
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
      <div className="flex justify-center mt-8 gap-6">
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
                : " text-lightText border border-designColor"
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
            key={project.id}
            className="flex flex-col w-full border p-5 shadow-2xl rounded-lg transition duration-500 h-full"
          >
            <div className="relative overflow-hidden rounded-t-lg h-60 group">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover object-top rounded-t-2xl hover:scale-95"
                initial={{ y: 0 }}
                whileHover={{ y: -80 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0  opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <div className="flex-grow mt-4">
              <h3 className="text-lg font-bold text-[#333] mb-2">
                {project.title}
              </h3>
              <ul className="flex text-start flex-wrap text-xs font-medium">
                {project.tech.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-opacity-45 px-2 py-1 border border-gray-300 bg-transparent hover:bg-black hover:text-white rounded-md m-1 transition-transform transform hover:scale-110 hover:text-designColor"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && filteredPortfolio.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-btnColor text-white rounded-lg text-lg font-semibold"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default OtherSection;
