import { star } from "../assets/icons";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-center items-center flex-col"
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-4">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
