import { motion } from "framer-motion";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { navVariants } from "../utils/motion";
const Navbar = () => {
  return (
    <header className="padding-x  shadow-md  h-[80px]  absolute z-10 w-full">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex justify-between   h-full items-center max-container"
      >
        <a href="/">
          <img src={headerLogo} alt="Logo" width={120} height={29} />
        </a>

        <ul className=" h-full flex  justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li className="h-full flex items-center" key={item.label}>
              <a
                className="font-montserrat leading-normal text-sm text-slate-gray relative  h-full text-center group transition-colors hover:text-gray-900 flex items-center"
                href={item.href}
              >
                {item.label}
                <div className="absolute w-full h-[4px] bg-coral-red bottom-0 left-0 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
