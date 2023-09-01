import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { TypingText } from "../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  "
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="z-10 relative flex flex-col justify-center items-start 
      w-full xl:w-2/5 max-xl:padding-x pt-28
      "
      >
        <TypingText
          title="| Our Summer Collection"
          textStyles="text-[16px] text-coral-red text-center"
        />

        <h1 className="mt-10 z-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          placeat impedit.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full  mt-20 gap-16">
          {statistics.map((stat) => (
            <div className="transition-colors duration-500 cursor-pointer rounded-[8px] px-2 flex items-center justify-center flex-col  hover:bg-slate-200" key={stat.label}>
              <TypingText
                title={stat.value}
                textStyles="font-palanquin font-bold text-4xl"
              />
              <TypingText title={stat.label} textStyles="text-slate-gray" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="relative flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center flex justify-center items-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
