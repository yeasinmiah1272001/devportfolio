import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import Container from "../Container/Container";
import { educationCart } from "../contants";

const Education = () => {
  return (
    <Container id={"education"} className="lg:p-0 p-5  lg:px-20 md:px-32">
      <h1 className="text-center font-semibold text-3xl text-lightText mb-4">
        Educational Qualifications
      </h1>
      <div className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4">
          {educationCart.map((item, index) => (
            <div
              className="bg-[#112240] py-16 transition-all duration-300 ease-in-out"
              key={index}
              style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
            >
              {/* Image Section */}
              <img
                src={item?.img}
                alt="image"
                className="h-24 w-24 rounded-full mx-auto"
              />

              {/* Text Section */}
              <div className="text-center mt-6">
                <h1 className="text-[22px] font-medium text-white tracking-wide">
                  {item?.name}
                </h1>
                <h2 className="text-xl mt-2 text-cyan-300 tracking-wide">
                  {item?.title}
                </h2>

                {/* Description Section */}
                <p className="mt-4 px-6 text-gray-400 text-sm tracking-wide">
                  <RiSingleQuotesL className="inline-block mr-1 text-cyan-400" />
                  {item?.description}
                  <RiSingleQuotesR className="inline-block ml-1 text-cyan-400" />
                </p>
                {/* Button Section */}
                <button className="mt-6 py-2 px-4 text-white border border-cyan-400 rounded-full tracking-wide text-sm">
                  View Certification
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;
