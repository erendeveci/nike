import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className="flex bg flex-1 cursor-pointer flex-col w-full max-sm:w-full"
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      
      <div className="flex w-[280px]  justify-start gap-2.5 pt-8">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
