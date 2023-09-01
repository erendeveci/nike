import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const ServiceCard = ({ imgURL, label, subtext,index }) => {
  return (
    <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words text-lg text-slate-gray leading-normal">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
