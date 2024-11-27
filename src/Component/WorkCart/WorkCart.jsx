import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion"
const WorkCart = ({ jobTag, jobTitle, date, detailsOne, detailsTwo, detailsThree }) => {
      return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <div className="text-xl">{jobTitle}<span className="text-designColor"> {jobTag}</span></div>
                  <h1 className="mt-2">{date}</h1>

                  <ul className="flex flex-col gap-4 text-darkText mt-6" >


                        <li className="flex gap-3">
                              <span className="text-designColor mt-1"> <TiArrowForward size={20}></TiArrowForward></span>
                              {detailsOne}
                        </li>

                        <li className="flex gap-3">
                              <span className="text-designColor mt-1"> <TiArrowForward size={20}></TiArrowForward></span>
                              {detailsTwo}
                        </li>

                        <li className="flex gap-3">
                              <span className="text-designColor mt-1"> <TiArrowForward size={20}></TiArrowForward></span>
                              {detailsThree}
                        </li>

                  </ul>
            </motion.div>
      );
};

export default WorkCart;