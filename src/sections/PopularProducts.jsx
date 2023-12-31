import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col justify-start gap-5"
      >
        <motion.h2
          variants={textVariant(0.5)}
          className="text-4xl font-bold font-palanquin"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </motion.h2>
        <motion.p
          variants={textVariant(0.5)}
          className="lg:max-w-lg font-montserrat text-slate-gray"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          facilis tempore necessitatibus corporis, repudiandae officiis deleniti
          quis alias quas nisi.
        </motion.p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product,index) => (
            <PopularProductCard index={index} key={product.name} {...product} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PopularProducts;
