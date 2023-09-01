import { shoe8 } from "../assets/images";
import { TypingText } from "../components/CustomTexts";
import { motion } from "framer-motion";

import Button from "../components/Button";
import { fadeIn } from "../utils/motion";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="overflow-hidden flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-1 flex-col"
      >
        <TypingText
          title="| Quality"
          textStyles="text-[16px] text-coral-red text-start"
        />
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto
          consequuntur delectus eaque voluptatibus. Vel labore animi tenetur sed
          qui dignissimos veniam eos nisi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          ab quisquam. Veniam tempora eos harum.
        </p>
        <div className="mt-12">
          <Button label="View Details" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-1 justify-center items-center"
      >
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
