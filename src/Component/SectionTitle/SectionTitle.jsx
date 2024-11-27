
const SectionTitle = ({ title, titleNo }) => {
      return (
            <div>

                  <h1 className="lg:text-[22px] text-[14px] md:text-[20px] font-semibold flex items-center">
                        {/* <!-- Adjusted text size for smaller screens and ensured the element is flex by default --> */}
                        <span className="text-sm md:text-lg text-designColor mr-3">{titleNo}</span> {title}
                        <span className="w-40 md:w-60 lg:w-72 h-[1px] bg-designColor ml-3 md:ml-6"></span>

                        {/* <!-- Adjusted width and margin for smaller screens --> */}
                  </h1>

            </div>
      );
};

export default SectionTitle;