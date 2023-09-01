import { TitleText,  } from "../components/CustomTexts";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-container"
    >
      <TitleText
        title={<p>What Our Customers Say?</p>}
        textStyles="font-palanquin text-center text-coral-red text-4xl font-bold"
      />

      <TitleText
        title={
          <p>
            Hear genuine stories from out satisfied customers about their
            exceptional experiences with us.
          </p>
        }
        textStyles="font-palanquin text-center mt-2 text-xl "
      />
     
      
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default CustomerReviews;
