import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Subscribe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <motion.h3
        variants={fadeIn("right", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
      >
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </motion.h3>
      <motion.div
        variants={fadeIn("left", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;
