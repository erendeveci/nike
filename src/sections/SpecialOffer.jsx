import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          className="object-contain w-full"
          src={offer}
          alt="offer"
          width={773}
          height={687}
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special</span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            iusto consequuntur delectus eaque voluptatibus. Vel labore animi
            tenetur sed qui dignissimos veniam eos nisi.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab quisquam. Veniam tempora eos harum.
          </p>
          <div className="mt-12 flex gap-4">
            <Button label="View details" iconUrl={arrowRight} />
            <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
